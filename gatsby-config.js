module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://zcoderx.com`,
    // Your Name
    name: 'Piotr Szpruta',
    // Main Site Title
    title: `Piotr Szpruta | .NET Developer`,
    // Description that goes under your name in main bio
    description: `23 years old C# Developer`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/piotrszpruta`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/zcoderx`,
    // Content of the About Me section
    about: ``,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Lavello s.c.',
        description: 'Full-Stack Developer | December 2020 - Present',
        link: 'https://lavello.pl',
      },
      {
        name: 'Fucco Design',
        description: 'Unity, C# Developer | October 2019 - January 2021',
        link: '',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C#, .NET, WinForms, JavaScript, HTML5, CSS',
      },
      {
        name: 'Databases',
        description: 'MySQL, PostreSQL',
      },
      {
        name: 'Software',
        description: 'Figma, MySql Workbench',
      },
      {
        name: 'Version Control',
        description: 'Git, Github',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-ZBSL7L6GHD`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zcoderx`,
        short_name: `zcoderx`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/bg.jpg`,
      },
    },
  ],
};
