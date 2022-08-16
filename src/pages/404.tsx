import React from 'react';
import { HeadFC, Link } from 'gatsby';
import 'scss/index.scss';

const page404 = () => {
  return (
    <div>
      <div className='error-404'>
        <div>
          <h1>404</h1>
          <h2>The page you are looking for could not be found</h2>
          <Link to='/'>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default page404;

export const Head: HeadFC = () => {
  return <title>Error : 404</title>;
};
