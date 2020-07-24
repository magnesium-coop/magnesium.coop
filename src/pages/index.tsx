// Gatsby supports TypeScript natively!
// @ts-ignore
import React, { useState } from "react"
import { graphql } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"

import AboutPage from "../pages/about"
import IntroPage from "../pages/intro"
import BlogPage from "../pages/blog"
import Header from "../components/header"
import ArrowNext from "../components/arrowNext"

const BlogIndex = ({ data }) => {

  /**
   * La estrategia es recorres todas las queries necesarias y armar todo aca el arbol. Luego tenerlo como referencia.
   */
  const initialFullPages = [
    {
      title: "Qué Hacemos",
      anchor: "intro",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      slides: []
    },
    {
      title: "Nosotros",
      anchor: "nosotros",
      backgroundColor: "bg-blanco",
      textColor: "text-negro",
      titleColor: "text-naranja",
      slides: []
    },
    {
      title: "Blog",
      anchor: "blog",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      slides: []
    }
  ]
  const initialLastSlides = initialFullPages.map((section) => { return {section:section.anchor, lastSlide:0}})

  function getQueHacemosSlides() {
    initialFullPages[0]["slides"] = []
    data.queHacemosFragments.edges.map(({ node }) => {
      initialFullPages[0]["slides"].push({
        order: node.frontmatter.order,
        seoDescription: node.frontmatter.seoDescription,
        anchor: node.frontmatter.anchor,
        html: node.html,
        annotation: node.frontmatter.annotation,
        backgroundColor: initialFullPages[0].backgroundColor,
        textColor: initialFullPages[0].textColor,
        titleColor: initialFullPages[0].titleColor,
        title: initialFullPages[0].title
      })
    })

  }

  function getNosotrosSlides() {
    const { autores, quienesSomos } = data
    const authors = autores.nodes

    initialFullPages[1]["slides"] = []
    //First
    initialFullPages[1]["slides"].push({
      anchor: "nosotros",
      html: quienesSomos.html,
      backgroundColor: initialFullPages[1].backgroundColor,
      textColor: initialFullPages[1].textColor,
      titleColor: initialFullPages[1].titleColor,
      title: quienesSomos.frontmatter.title,
      arrowNext: {
        backgroundColor: "bg-negro",
        textColor: "text-blanco",
        titleColor: "text-naranja",
      }
    })
    //Second
    initialFullPages[1]["slides"].push({
      anchor: "equipo",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      title: "El Equipo",
      autores: authors
    })
    //Third
    initialFullPages[1]["slides"].push({
      anchor: "colaboradores",
      backgroundColor: "bg-naranja",
      textColor: "text-blanco",
      titleColor: "text-negro",
      title: "Colaboradores",
      autores: authors
    })

  }

  function getBlogPosts() {
    initialFullPages[2]["slides"] = []
    //First
    initialFullPages[2]["slides"].push({
      anchor: "blog",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      title: "Blog"
    })
    //Rest
    data.blogPosts.edges.map(({ node }) => {
      initialFullPages[2]["slides"].push({
        slug: node.fields.slug,
        description: node.frontmatter.description,
        excerpt: node.excerpt,
        date: node.frontmatter.date,
        html: node.html,
        backgroundColor: "bg-blanco",
        textColor: "text-negro",
        titleColor: "text-naranja",
        title: node.frontmatter.title,
        author: node.frontmatter.author
      })
    })

  }


  getQueHacemosSlides()
  getNosotrosSlides()
  getBlogPosts()


  const [fullpages] = useState(initialFullPages)
  const [lastSlides, setLastSlides] = useState(initialLastSlides)
  const [currentPage, setCurrentPage] = useState(fullpages[0])

  function onSlideLoad(section, origin, destination, direction) {
    lastSlides[section.index].lastSlide = destination.index
    setLastSlides(lastSlides)
    //console.debug('OnSlideLoad ',{section, origin,destination,direction})
  }
  
  function onLeavePage(origin, destination, direction) {
    setCurrentPage(fullpages[destination.index].slides[lastSlides[destination.index].lastSlide])
    //console.debug('OnLeavePage ',{origin,destination,direction})
  }

  function onLeaveSlide(section, origin, destination, direction) {
    setCurrentPage(fullpages[section.index].slides[destination.index])
    //console.debug('OnLeaveSlide ',{section, origin,destination,direction})
  }

  return (
    <div>
      <Header pages={fullpages} backgroundColor={currentPage.backgroundColor}
              textColor={currentPage.textColor}/>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={700}
        menu='#menu-principal'
        animateAnchor={false}
        loopHorizontal={false}
        scrollOverflow={true}
        recordHistory={true}
        navigation={true}
        slidesNavigation={true}
        onLeave={onLeavePage.bind(this)}
        onSlideLeave={onLeaveSlide.bind(this)}
        afterSlideLoad={onSlideLoad.bind(this)}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <IntroPage pages={fullpages} pagePos="0"/>
              <AboutPage pages={fullpages} pagePos="1"/>
              <BlogPage pages={fullpages} pagePos="2" fullPageApi={fullpageApi}/>
              <ArrowNext arrow={currentPage.arrowNext}/>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>

  )
}

export default BlogIndex

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
    autores: allAuthorYaml {
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
  quienesSomos: markdownRemark(frontmatter: {id: {eq: "quienes-somos"}}) {
    html
    frontmatter {
      id
      title
      description
    }
  }
  blogPosts:allMarkdownRemark(
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