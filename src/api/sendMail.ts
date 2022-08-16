import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import { isEmpty, isString } from 'lodash';

const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_KEY);

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

      await Promise.all([
        // confirmation email to sender
        sendgrid.send({
          from: {
            email: 'contact@akshaygupta.live',
            name: 'Akshay Gupta',
          },
          personalizations: [
            {
              to: [
                {
                  email,
                },
              ],
              dynamicTemplateData: {
                name,
              },
            },
          ],
          templateId: 'd-75f24f35822147ccb16de30fd8ab3f3c',
        }),
        // lead gen email to myself
        sendgrid.send({
          from: {
            email: 'contact@akshaygupta.live',
            name: 'Contact Enquiry - Akshay Gupta',
          },
          personalizations: [
            {
              to: [
                {
                  email: 'contact@akshaygupta.live',
                },
              ],
              cc: [
                {
                  email: 'akshaygupta.live@gmail.com',
                },
              ],
              dynamicTemplateData: {
                name,
                email,
                phone,
                message,
              },
            },
          ],
          templateId: 'd-9b520847ee204815ae3f4fbbe973e42c',
        }),
      ]);
    }

    return res.status(200).json({ message: 'mail sent' });
  } catch (e) {
    console.log('Error in sending mail ---', e);
    return res.status(500).json({ message: 'Error in sending mail', error: e });
  }
};

export default handler;
