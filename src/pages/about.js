import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { allAuthorYaml, markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const authors = allAuthorYaml.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={frontmatter.title} />
      <article>
        <header>
      <h1>{frontmatter.title} </h1>
        </header>
        <section>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
        <section>
          <h1>El Equipo </h1>
          {authors.map((author) => (
            <Bio author={author} key={author.id}/>
          ))}
        </section>

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
    markdownRemark(frontmatter: { id: { eq: "quienes-somos" } }) {
      html
      frontmatter {
        id
        title
        description
      }
    }
  }
`