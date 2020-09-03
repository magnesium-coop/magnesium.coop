/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"


const Bio = (data) => {
  let author = data.author.frontmatter
  if (author) {
    return (
      <div
        style={{
          display: `flex`
        }}
      >
        <Image
          fluid={author.profilepicture.childImageSharp.fluid}
          alt={author.name}
          style={{
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`
          }}
          imgStyle={{
            borderRadius: `50%`
          }}
        />
        <p>
          Escrito por <strong>{author.name}</strong> {author.bio}
          {` `}
          <a href={`https://twitter.com/${author.twitter}`}>
            Twitter
          </a>
        </p>
      </div>
    )
  } else {
    return null
  }
}

export default Bio
