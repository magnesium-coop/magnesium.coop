import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { ArcherContainer, ArcherElement } from "react-archer"
import theme from '../../tailwind.config'

import Layout from "../components/layout"
import Slide from "../components/slide"
import tablaPeriodica from "../../content/assets/tabla-periodica-01.svg"

const IntroPage = ({ data, anchor, title, backgroundColor, textColor, titleColor }) => {

  const fragments = data.queHacemosFragments.edges

  function isOdd(num) { return num % 2;}

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

          <ArcherContainer
            strokeColor={theme.theme.extend.colors.naranja}
            offset="-23"
            svgContainerStyle={{zIndex:40}}>


            <div className="flex justify-between">
              <ArcherElement
                id={"text-" + node.frontmatter.order}
                relations={[{
                  targetId: "annotation-" + node.frontmatter.order,
                  targetAnchor: (isOdd(node.frontmatter.order) ? 'top' : 'left'),
                  sourceAnchor: (isOdd(node.frontmatter.order) ? 'right' : 'right'),
                }]}>
                <div className={"self-center mb-16 mt-16 w-8/12 font-mgblack annotation text-6xl " + textColor}
                     dangerouslySetInnerHTML={{
                       __html: node.html
                     }}
                />
              </ArcherElement>
              <ArcherElement
                id={"annotation-" + node.frontmatter.order}>
                <div className={"w-3/12 font-mgannotated text-naranja leading-tight text-center text-4xl "+(isOdd(node.frontmatter.order) ? 'self-end' : 'self-start')}
                     dangerouslySetInnerHTML={{ __html: node.frontmatter.annotation }}/>
              </ArcherElement>
            </div>

          </ArcherContainer>
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