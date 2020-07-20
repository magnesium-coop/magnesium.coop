import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { allAuthorYaml, markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const authors = allAuthorYaml.nodes
  return (
    <Layout location={location} title={siteTitle} color={"bg-red-800"}>
  <article>
      <section className="slide bg-blue-400">
        <SEO title={frontmatter.title}/>
        <header>
          <h1>{frontmatter.title} </h1>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
      <section className="slide">
        <SEO title={frontmatter.title}/>
        <header>
          <h1>{frontmatter.title} </h1>
        </header>
        <h1>El Equipo </h1>
        {authors.map((author) => (
          <Bio author={author} key={author.id}/>
        ))}
      </section>
      <section className="slide">
        <SEO title={frontmatter.title}/>
        <header>
          <h1>{frontmatter.title} </h1>
        </header>
        <h1>Colaboradores</h1>
        {authors.map((author) => (
          <Bio author={author} key={author.id}/>
        ))}
        <footer></footer>

      </section>
  </article>
</Layout>
)
}

//export default AboutPage
export default props => (
<StaticQuery query={pageQuery}
render={data => <AboutPage data={data} {...props}/>}
/>
)

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