import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Akshay Gupta`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'I am a Full Stack web developer.'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/portfolio/`,
        name: 'portfolio',
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //       },
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-smartypants',
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,400,700,800,900`],
        display: 'swap',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ]
};

export default config;
