import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Slide from "../components/slide"
import Bio from "../components/bio"

function removeSlash(text) {
  return text.replace(/\//g, '')
}

const BlogPage = ({ data, fullPageApi, anchor, title, backgroundColor, textColor, titleColor }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges


  return (
    <Layout anchor={anchor}>
      <Slide
        backgroundColor={backgroundColor}
        textColor={textColor}
        seoTitle={siteTitle}
        seoDescription={"Blog"}>
        <h1 className={titleColor}>{title}</h1>
        {posts.map(({ node }) => {
          return (
            <article key={"#" + anchor + node.fields.slug}>
              <header>
                <h3>
                  <a href={"#" + anchor + node.fields.slug} className={textColor}
                     onClick={() => fullPageApi.moveTo(anchor, removeSlash(node.fields.slug))}>{node.frontmatter.title}</a>
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
        const author = node.frontmatter.author
        return (
          <div key={removeSlash(node.fields.slug)}>
            <Slide
              backgroundColor={backgroundColor}
              textColor={textColor}
              titleColor={titleColor}
              slideAnchor={removeSlash(node.fields.slug)}
              seoTitle={node.frontmatter.title}
              seoDescription={node.frontmatter.description}>
              <article>
                <header>
                  <h1 className={"font-mgblack " + titleColor}>
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

                <footer>
                  <Bio author={author}/>
                </footer>
              </article>
            </Slide>
          </div>
        )
      })}
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
          id
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
