import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import LayoutLong from "../components/layoutLong"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Slide from "../components/slide"
import Bio from "../components/bio"

const BlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <Slide color="bg-green-500" location={location} title="Blog">

        <h1>Blog</h1>


        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </section>
            </article>
          )
        })}
        </Slide>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const author = node.frontmatter.author
          return (
            <Slide color="bg-purple-200" title={node.frontmatter.title}>
              <SEO
                title={node.frontmatter.title}
                description={node.frontmatter.description || node.excerpt}
              />
              <article >
                <header>
                  <h1
                    style={{
                      marginBottom: 0,
                    }}
                  >
                    {node.frontmatter.title}
                  </h1>
                  <p
                    style={{
                      display: `block`,
                    }}
                  >
                    {node.frontmatter.date}
                  </p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: node.html }} />

                <footer>
                  <Bio author={author}/>
                </footer>
              </article>
            </Slide>
          )
        })}
      </article>
    </Layout>
  )
}

//export default BlogPage

export default props => (
  <StaticQuery query={pageQuery}
               render={data => <BlogPage data={data} {...props}/>}
  />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {fileAbsolutePath: {regex: "/(blog)/.*\\\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
              author {
              id
              bio
              name
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
      }
    }
  }
`
