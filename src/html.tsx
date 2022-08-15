import React from 'react';

type HTMLProps = {
  headComponents: React.ReactNode;
  body: string;
  postBodyComponents: React.ReactNode;
};

const HTML = ({ headComponents, body, postBodyComponents }: HTMLProps) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {headComponents}
        <link href='/img/favicon.ico' rel='icon' />
      </head>
      <body style={{ padding: '0px !important' }} className='no-overflow'>
        <div id='___gatsby' dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
