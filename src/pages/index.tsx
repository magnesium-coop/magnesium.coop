// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutPage from "../pages/about"
import IntroPage from "../pages/intro"
import BlogPage from "../pages/blog"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  queHacemos: {
    html: string
    frontmatter: {
      id: string
      title: string
      description: string
    }
  }
  blogPosts: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.blogPosts.edges
  const queHacemos = data.queHacemos

  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {700}
      menu = {'#menu-principal'}
      scrollOverflow = {true}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/*<div className="section bg-gray-100">
              <section>
                <h2>¿Qué hacemos?</h2>

                <div
                  dangerouslySetInnerHTML={{
                    __html: queHacemos.html
                  }}
                />
              </section>
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>*/}
            <IntroPage location={"que-hacemos"}></IntroPage>
           {/* <div className="section bg-red-500">
              <div className="slide">
              <h2>Links</h2>
              <ul>
                <li><Link to="/about/">¿Quiénes somos?</Link></li>
                <li><Link to="/projects/">Proyectos</Link></li>
                <li><Link to="/blog/">Blog</Link></li>
                <li><Link to="/contact/">Contacto</Link></li>
              </ul>
              </div>
              <div className="slide">
              <h2>Blog</h2>

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
              </div>
            </div>*/}
              <AboutPage location={"nosotros"}></AboutPage>
            <BlogPage location={"blog"}></BlogPage>
          </ReactFullpage.Wrapper>
        );
      }}/>

    /*<Layout location={location} title={siteTitle}>
      <SEO title="All posts"/>
      <section className="section">
        <h2>¿Qué hacemos?</h2>

        <div
          dangerouslySetInnerHTML={{
            __html: queHacemos.html
          }}
        />
      </section>
      <h2>Links</h2>
      <ul>
        <li><Link to="/about/">¿Quiénes somos?</Link></li>
        <li><Link to="/projects/">Proyectos</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/contact/">Contacto</Link></li>
      </ul>
      <h2>Blog</h2>

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
    </Layout>*/
  )
}

export default BlogIndex

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
