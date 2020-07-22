import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slide from "../components/slide"
import Bio from "../components/bio"

const AboutPage = ({ data, anchor, title, backgroundColor, textColor, titleColor }) => {
  const siteTitle = data.site.siteMetadata.title
  const { allAuthorYaml, markdownRemark } = data
  const { html } = markdownRemark
  const authors = allAuthorYaml.nodes
  return (
    <Layout anchor={anchor}>
      <article>
        <Slide seoTitle={siteTitle} seoDescription={""} backgroundColor={backgroundColor} textColor={textColor}> {/*TODO:desc*/}
          <h2 className={"color-"+titleColor}>{title}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Slide>
        <Slide seoTitle={"El Equipo"} seoDescription={""} backgroundColor={"negro"} textColor={"blanco"}>
          <h1 className={"color-naranja"}>El Equipo</h1>
          {authors.map((author) => (
            <Bio author={author} key={author.id}/>
          ))}
        </Slide>

        <Slide seoTitle={"Colaboradores"} seoDescription={""} backgroundColor={"naranja"} textColor={"blanco"}>
          <h1 className={"color-negro"}>Colaboradores</h1>
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