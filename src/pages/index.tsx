import React from "react"
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
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
