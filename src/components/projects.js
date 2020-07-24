import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "./layout"
import Slide from "./slide"

function removeSlash(text) {
  return text.replace(/\//g, '')
}

const ProjectsPage = ({ data, fullPageApi, anchor, title, backgroundColor, textColor, titleColor }) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout anchor={anchor}>
      <Slide backgroundColor={backgroundColor} textColor={textColor} seoTitle={siteTitle} seoDescription={"Blog"}>
        <h1 className={titleColor}>{title}</h1>
        {projects.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={"#" + anchor + node.fields.slug}>
              <header>
                <h3>
                  <a href={"#" + anchor + node.fields.slug} className={textColor}
                     onClick={() => fullPageApi.silentMoveTo(anchor, removeSlash(node.fields.slug))}>{title}</a>
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
        return (
          <div key={removeSlash(node.fields.slug)}>
            <Slide
              backgroundColor={backgroundColor}
              textColor={textColor}
              titleColor={titleColor}
              slideAnchor={removeSlash(node.fields.slug)}
              seoTitle={node.frontmatter.title}
              seoDescription={node.frontmatter.description || node.excerpt}>
              <article>
                <header>
                  <h1 className={"font-mgblack "+titleColor}>
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
          </div>
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
