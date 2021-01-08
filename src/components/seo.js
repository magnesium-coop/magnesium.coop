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

const SEO = ({ description, lang, meta, title, image, anchor }) => {
  const { site } = useStaticQuery(
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
      }
    `
  )

  console.log(image)

  const metaDescription = description || site.siteMetadata.description
  let defaultImage = site.siteMetadata.siteUrl + '/intro01.png'
  const defaultProyectosImage = site.siteMetadata.siteUrl + '/proyectos.png'
  const defaultNosotrosImage = site.siteMetadata.siteUrl + '/nosotros.png'

  if (anchor === 'proyectos') {
    defaultImage = defaultProyectosImage
  } else if (anchor === 'nosotros') {
    defaultImage = defaultNosotrosImage
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: image || defaultImage,
        },
        {
          property: `og:image:secure_url`,
          content: image || defaultImage,
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
          content: image || defaultImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter
        },
        {
          name: `twitter:title`,
          content: title
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
