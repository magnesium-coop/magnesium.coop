import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slide from "../components/slide"
import Bio from "../components/bio"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const { allAuthorYaml, markdownRemark } = data
  const { html } = markdownRemark
  const authors = allAuthorYaml.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <Slide title={siteTitle} location={location} color="bg-blue-400">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Slide>
        <Slide title={siteTitle} location={location} color="bg-blue-800">
          <h1>El Equipo </h1>
          {authors.map((author) => (
            <Bio author={author} key={author.id}/>
          ))}
        </Slide>

        <Slide title={siteTitle} location={location} color="bg-blue-800">
          <h1>Colaboradores</h1>
          {authors.map((author) => (
            <Bio author={author} key={author.id}/>
          ))}
        </Slide>
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