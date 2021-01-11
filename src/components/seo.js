/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ description, lang, meta }) => {
  const { site, blogPosts } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            social {
              twitter
            }
          }
        }
        blogPosts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/(blog)/.*\\\\.md$/"}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                featuredimage {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  )
  const url = typeof window !== 'undefined' ? window.location.href : '#intro';
  const slug = url.split('#')[1]
  console.log(slug)

  const metaDescription = description || site.siteMetadata.description
  let metaTitle = site.siteMetadata.title
  let defaultImage = site.siteMetadata.siteUrl + '/intro01.png'
  const defaultProyectosImage = site.siteMetadata.siteUrl + '/proyectos.png'
  const defaultNosotrosImage = site.siteMetadata.siteUrl + '/nosotros.png'

  if (slug.includes('proyectos')) {
    defaultImage = defaultProyectosImage
    metaTitle = 'Proyectos'
  } else if (slug.includes('nosotros')) {
    defaultImage = defaultNosotrosImage
    metaTitle = 'Nosotros'
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: defaultImage,
        },
        {
          property: `og:image:secure_url`,
          content: defaultImage,
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          property: `twitter:image`,
          content: defaultImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
  image: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
}

export default SEO
