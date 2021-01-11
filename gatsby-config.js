module.exports = {
  siteMetadata: {
    title: `Magnesium.coop`,
    description: `Desarrollamos y diseñamos software, aplicaciones y páginas web para solucionar problemas y mejorar procesos.`,
    siteUrl: `https://magnesium.coop`,
    //siteUrl: 'https://magnesium.coop.test.magnesium.coop/',
    social: {
      twitter: 'https://twitter.com/magnesiumcoop',
      linkedin: 'https://www.linkedin.com/company/magnesiumcoop',
      instagram: 'https://www.instagram.com/magnesiumcoop/',
      gitlab: 'https://gitlab.com/magnesiumcoop'
    },
    contacto: {
      telefono: ``,
      direccion: ``,
      email: `info@magnesium.coop`,
      support: 'soporte@magnesium.coop'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: `data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/texts`,
        name: `texts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-LL87NQRCD4", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,

        },
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magnesium.coop: Desarrollamos software aplicaciones y páginas web`,
        short_name: `Magnesium.coop`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#f25c4a`,
        display: `minimal-ui`,
        icon: `content/assets/mg-negro.png`,
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      }
    },
   // `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,  // <-- this line adds emoji
        ]
      }
    },
  ],
  mapping: {
    "MarkdownRemark.frontmatter.author": `MarkdownRemark.frontmatter.id`,
    "MarkdownRemark.frontmatter.managers.manager": `MarkdownRemark.frontmatter.id`,
    "MarkdownRemark.frontmatter.technologies.technology": `TechnologyYaml`,
    "MarkdownRemark.frontmatter.elementname": `ElementYaml`,
  },
}
