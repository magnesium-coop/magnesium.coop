import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slide from "../components/slide"

const IntroPage = ({ data, anchor, title, backgroundColor, textColor, titleColor }) => {

  const fragments = data.queHacemosFragments.edges

  return (
    <Layout anchor={anchor}>
      <article>
        {fragments.map(({ node }) => {
          return (
            <Slide backgroundColor={backgroundColor}
                   textColor={textColor}
                   seoTitle={title}
                   seoDescription={"Magnesium.coop"}>
              <div className={"text-6xl color-"+textColor}
                   dangerouslySetInnerHTML={{
                     __html: node.html
                   }}
              />
            </Slide>
          )
        })}

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
    queHacemosFragments: allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {fileAbsolutePath: {regex: "/que-hacemos.*.md$/"}}
      ) {
      edges {
        node {
          html
        }
      }
    }
  }
`