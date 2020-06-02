/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = ({ author }) => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5)
      }}
    >
      <Image
        fluid={author.profilepicture.childImageSharp.fluid}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
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
}

export default Bio
