import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { allAuthorYaml } = data
  const authors = allAuthorYaml.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About us" />
      <article>
        <header>
      <h1>About us</h1>
        </header>
        <section>
          <p>
            We are two Software Developers with degrees in Engineering that love
            to talk about programming, tech culture and other random stuff.
          </p>
        </section>
        {authors.map((author) => (
          <Bio author={author} key={author.id}/>
        ))}
        <footer></footer>
      </article>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
    allAuthorYaml {
      nodes {
        bio
        name
        id
        twitter
        profilepicture {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`