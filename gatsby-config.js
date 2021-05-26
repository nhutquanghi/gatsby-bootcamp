module.exports = {
  siteMetadata: {
    title: 'Learning FullStack Bootcamp - GatsbyJs',
    author: 'TNNQ',
  },
  
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
}
