import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Slide from "../components/slide"
import tablaPeriodica from "../../content/assets/tabla-periodica-01.svg"

const IntroPage = ({ data, anchor, title, backgroundColor, textColor, titleColor }) => {

  const fragments = data.queHacemosFragments.edges

  function getFirstSlide(node) {
    return (
      <div key={"slide-" + node.frontmatter.order}>

        <Slide backgroundColor={backgroundColor}
               textColor={textColor}
               seoTitle={title}
               seoDescription={node.frontmatter.seoDescription}
               slideAnchor={node.frontmatter.anchor}>

          <div className="flex justify-between">
            <div className={"self-center w-6/12 text-5xl " + textColor}
                 dangerouslySetInnerHTML={{
                   __html: node.html
                 }}
            />
            <div className="justify-end w-1/3">
              <img className="self-center w-full" src={tablaPeriodica} alt="Magnesium.coop logo"/>
            </div>
          </div>
        </Slide>
      </div>
    )
  }

  function getSlide(node) {
    return (
      <div key={"slide-" + node.frontmatter.order}>

        <Slide backgroundColor={backgroundColor}
               textColor={textColor}
               seoTitle={title}
               seoDescription={node.frontmatter.seoDescription}
               slideAnchor={node.frontmatter.anchor}>
          <div className="flex justify-between">
            <div className={"self-center w-8/12 font-mgblack annotation text-6xl " + textColor}
                 dangerouslySetInnerHTML={{
                   __html: node.html
                 }}
            />
            <div className="self-center w-4/12 font-mgannotated text-naranja text-4xl" dangerouslySetInnerHTML={{ __html: node.frontmatter.annotation }}/>
          </div>
        </Slide>
      </div>
    )
  }

  return (
    <Layout anchor={anchor}>
      <article>
        {fragments.map(({ node }) => {
          if (node.frontmatter.order === 0) {
            return getFirstSlide(node)
          } else {
            return getSlide(node)
          }

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
      filter: {fileAbsolutePath: {regex: "/que-hacemos-.*.md$/"}}
      ) {
      edges {
        node {
          html
          frontmatter {
            anchor
            seoDescription
            order
            annotation
          }
        }
      }
    }
  }
`