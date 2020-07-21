import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from "../components/slide"
import Bio from "../components/bio"

function removeSlash(text) {
  return text.replace("/", "")
}

const ProjectsPage = ({ data, location, fullPageApi }) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Slide backgroundColor="naranja" color="negro" title="Blog">
        <h1>Proyectos</h1>
        {projects.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={"#" + location + node.fields.slug}>
              <header>
                <h3
                  style={{
                  }}
                >
                  <a href={"#" + location + node.fields.slug}
                     onClick={() => fullPageApi.silentMoveTo(location, removeSlash(node.fields.slug))}>{title}</a>
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
      {projects.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const author = node.frontmatter.author
        return (
          <Slide
            backgroundColor="blanco"
            color="negro"
            location={removeSlash(node.fields.slug)}
            title={node.frontmatter.title}
            description={node.frontmatter.description || node.excerpt}>
            <article>
              <header>
                <h1 className="font-mgblack"
                    style={{
                      marginBottom: 0
                    }}
                >
                  {node.frontmatter.title}
                </h1>
                <p
                  style={{
                    display: `block`
                  }}
                >
                  {node.frontmatter.date}
                </p>
              </header>
              <section dangerouslySetInnerHTML={{ __html: node.html }}/>

            </article>
          </Slide>
        )
      })}
    </Layout>
  )
}

export default props => (
  <StaticQuery query={pageQuery}
               render={data => <ProjectsPage data={data} {...props}/>}
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
    filter: {fileAbsolutePath: {regex: "/(projects)/.*\\\\.md$/"}}
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
  }
`
