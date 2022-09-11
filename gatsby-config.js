module.exports = {
  siteMetadata: {
    title: `Workout-Hero`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-excel`,
    `gatsby-plugin-sass`,
  ],
};