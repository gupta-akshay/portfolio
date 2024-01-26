type MergeFields = {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
};

export const replaceMergeFields = ({
  messageString,
  mergeFields: { name = '', email = '', phone = '', message = ''},
}: {
  messageString: string;
  mergeFields: MergeFields;
}): string => {
  const mergeTags = [
    {
      tag: '{{name}}',
      value: name,
    },
    {
      tag: '{{email}}',
      value: email,
    },
    {
      tag: '{{phone}}',
      value: phone,
    },
    {
      tag: '{{message}}',
      value: message,
    },
  ];

  return mergeTags.reduce((updatedMessage, { tag, value }) => {
    return updatedMessage.replace(new RegExp(tag, 'g'), value);
  }, messageString);
};
