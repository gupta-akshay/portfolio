import type { GatsbyNode } from "gatsby"
const path = require('path');

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        sections: path.resolve(__dirname, 'src/sections'),
        scss: path.resolve(__dirname, 'src/scss'),
        interfaces: path.resolve(__dirname, 'src/interfaces'),
      },
    },
  });
}
