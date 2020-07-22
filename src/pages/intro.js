import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slide from "../components/slide"

const IntroPage = ({ data, anchor, title, backgroundColor, textColor, titleColor }) => {
  const siteTitle = data.site.siteMetadata.title
  const queHacemos = data.queHacemos
  const { html } = queHacemos

  return (
    <Layout anchor={anchor}>
      <article>
        <Slide backgroundColor={backgroundColor} textColor={textColor} seoTitle={siteTitle} seoDescription={""}> {/*TODO:desc*/}
          <div className="text-6xl"
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