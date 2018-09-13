module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        pathToTheme: 'src/themes/default.ts',
      },
    },
  ],
}
