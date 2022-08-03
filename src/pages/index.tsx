import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Spinner from '../components/spinner';
import Hero from '../sections/hero';
import About from '../sections/about';
import Contact from '../sections/contact';
import { HomePageTypes } from "../interfaces/homepage";

const HomePage = (props:HomePageTypes) => {
  const { site } = props.data;
  return (
    <div>
      <Helmet>
        <title>{site.meta.title}</title>
        <meta name='description' content={site.meta.description} />
      </Helmet>
      <Layout>
        <Hero id='home' />
        <About id='about' />
        <Contact id='contact' />
      </Layout>
      <Spinner duration={1000} />
    </div>
  );
}

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`;
