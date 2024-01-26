import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { isEmpty, isString } from 'lodash';
import { Resend } from 'resend';
import sanitizeHtml from 'sanitize-html';

import { replaceMergeFields } from '../apiUtils';
import userHtmlString from '../apiUtils/userEmailHTML';
import leadGenHtmlString from '../apiUtils/leadGenHTML';

const resend = new Resend(process.env.RESEND_API_KEY);

type RequestBody = {
  name: string;
  email: string;
  phone: string | undefined;
  message: string;
};

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  const { method } = req;
  let { body } = req;
  let parsedBody = {} as RequestBody;

  try {
    if (method === 'POST') {
      // body must be present
      try {
        parsedBody = JSON.parse(body) as RequestBody;
      } catch (err) {
        console.log('Invalid JSON body', err);
        return res.status(400).json({ message: 'Malformed request body.' });
      }

      if (isEmpty(parsedBody)) {
        return res
          .status(400)
          .json({ message: 'Request body must be present.' });
      }

      const { name, email, phone, message } = parsedBody;

      // Validating request body
      if (
        name.trim().length === 0 ||
        email.trim().length === 0 ||
        message.trim().length === 0
      ) {
        return res.status(400).json({ message: 'Required params missing.' });
      }
      if (email.trim().length > 0 && !emailRegex.test(email)) {
        return res.status(400).json({ message: 'Not a valid email.' });
      }
      if (
        isString(phone) &&
        phone.trim().length > 0 &&
        !phoneRegex.test(phone)
      ) {
        return res.status(400).json({ message: 'Not a valid phone number.' });
      }

      // sanitizing values before using
      const nameToSend = sanitizeHtml(name);
      const messageToSend = sanitizeHtml(message);

      await Promise.all([
        // confirmation email to sender
        resend.emails.send({
          from: 'Akshay Gupta <contact@akshaygupta.live>',
          to: [email],
          subject: 'Thank you for contacting! I will reach out to you soon!',
          html: replaceMergeFields({
            messageString: userHtmlString,
            mergeFields: {
              name: nameToSend,
            }
          }),
        }),
        // lead gen email to myself
        resend.emails.send({
          from: 'Contact Enquiry - Akshay Gupta <contact@akshaygupta.live>',
          to: ['contact@akshaygupta.live'],
          cc: ['akshaygupta.live@gmail.com'],
          subject: 'New Contact Enquiry',
          html: replaceMergeFields({
            messageString: leadGenHtmlString,
            mergeFields: {
              name: nameToSend,
              email,
              phone,
              message: messageToSend,
            }
          }),
        })
      ]);
    }

    return res.status(200).json({ message: 'mail sent' });
  } catch (e) {
    console.log('Error in sending mail ---', e);
    return res.status(500).json({ message: 'Error in sending mail', error: e });
  }
};

export default handler;
