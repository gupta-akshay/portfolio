import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { isEmpty, isString } from "lodash";

const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_KEY);

type MessageType = {
  to: string,
  from: string,
  subject: string,
  text: string,
  html: string,
};

type RequestBody = {
  name: string,
  email: string,
  phone: string | undefined,
  message: string,
};

const emailRegex = /\S+@\S+\.\S+/;
const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  const { method } = req;
  let { body } = req;
  let parsedBody = {} as RequestBody;

  let message1 = {} as MessageType;
  // let message2 = <MessageType>{};

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
        return res.status(400).json({ message: 'Request body must be present.' });
      }

      const { name, email, phone, message } = parsedBody;

      // Validating request body
      if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
        return res.status(400).json({ message: 'Required params missing.' });
      }
      if (email.trim().length > 0 && !emailRegex.test(email)) {
        return res.status(400).json({ message: 'Not a valid email.' });
      }
      if (isString(phone) && phone.trim().length > 0 && !phoneRegex.test(phone)) {
        return res.status(400).json({ message: 'Not a valid phone number.' });
      }

      // message1.to = email;
      // message1.from = 'contact@akshaygupta.live';
      // message1.subject = 'Thank you for contacting! I will reach out to you soon!'
      // message1.text = 'Test Message';
      // message1.html = '<div>Test Message/div>'

      // confirmation email to sender
      await sendgrid.send({
        from: {
          email: 'contact@akshaygupta.live',
        },
        personalizations: [
          {
            to: [
              {
                email,
              }
            ],
            dynamicTemplateData: {
              name
            }
          },
        ],
        templateId: 'd-75f24f35822147ccb16de30fd8ab3f3c',
      });

      // TODO - Mail with sender details to me
    }

    return res.status(200).json({ message: 'mail sent' });
  } catch (e) {
    console.log('Error in sending mail ---', e);
    return res.status(500).json({ message: 'Error in sending mail', error: e });
  }
};

export default handler;
