import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slide from "../components/slide"
import SEO from "../components/seo"

const IntroPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const queHacemos = data.queHacemos
  const { frontmatter, html } = queHacemos

  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <Slide color="bg-negro text-white" location={location} title={siteTitle}>
          <SEO title={frontmatter.title}/>
          <h2>¿Qué hacemos?</h2>

          <div
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
        </Slide>
      </article>
    </Layout>
  )
}

export default props => (
  <StaticQuery query={pageQuery}
               render={data => <IntroPage data={data} {...props}/>}
  />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blogPosts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {fileAbsolutePath: {regex: "/(blog)/.*\\\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    queHacemos: markdownRemark(frontmatter: { id: { eq: "que-hacemos" } }) {
      html
      frontmatter {
        id
        title
        description
      }
    }
  }
`