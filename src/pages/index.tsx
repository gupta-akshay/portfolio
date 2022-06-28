import React from "react"
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Spinner from 'components/spinner';
import Layout from 'components/layout';

import { SiteMetaData } from '../types';

interface propsType {
  data: SiteMetaData
}
// markup
const IndexPage = ({ data }: propsType) => {
  const { site } = data;
  return (
    <div>
      <Helmet>
        <title>{site.meta.title}</title>
        <meta name="description" content={site.meta.description} />
      </Helmet>
      <Layout>
        <div id="home">This is a test</div>
      </Layout>
      <Spinner duration={1000} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`
