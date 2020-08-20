// Gatsby supports TypeScript natively!
// @ts-ignore
import React, { useState } from "react"
import { graphql } from "gatsby"

import ReactFullpage from "@fullpage/react-fullpage"


import AboutPage from "../components/about"
import IntroPage from "../components/intro"
import BlogPage from "../components/blog"
import Header from "../components/header"
import SecondMenu from "../components/secondMenu"
import SimpleIntroPage from "../components/simpleIntro"
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
      borderColor: "border-naranja",
      headerBackground: "negro-transparent",
      slides: [],
      secondMenu: false
    },
    {
      title: "Nosotros",
      anchor: "nosotros",
      backgroundColor: "bg-blanco",
      textColor: "text-negro",
      titleColor: "text-naranja",
      borderColor: "border-naranja",
      headerBackground: "blanco-transparent",
      secondMenuBackground: "transparent-blanco",
      slides: [],
      secondMenu: true
    },
    {
      title: "Blog",
      anchor: "blog",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      borderColor: "border-naranja",
      headerBackground: "negro-transparent",
      slides: [],
      secondMenu: false
    },
    {
      title: "Proyectos",
      anchor: "proyectos",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      borderColor: "border-naranja",
      headerBackground: "negro-transparent",
      slides: [],
      secondMenu: false
    }
  ]
  const initialLastSlides = initialFullPages.map((section) => {
    return { section: section.anchor, lastSlide: 0 }
  })

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
        borderColor: initialFullPages[0].borderColor,
        headerBackground: initialFullPages[0].headerBackground,
        title: node.frontmatter.title
      })
    })

  }

  function getNosotrosSlides() {
    const { autores, colaboradores, quienesSomos } = data
    const authors = autores.nodes
    const colaboradoresAll = colaboradores.nodes

    initialFullPages[1]["slides"] = []
    //First
    initialFullPages[1]["slides"].push({
      anchor: "nosotros",
      html: quienesSomos.html,
      backgroundColor: initialFullPages[1].backgroundColor,
      textColor: initialFullPages[1].textColor,
      titleColor: initialFullPages[1].titleColor,
      borderColor: initialFullPages[1].borderColor,
      headerBackground: initialFullPages[1].headerBackground,
      secondMenuBackground: initialFullPages[1].secondMenuBackground,
      title: quienesSomos.frontmatter.title,
      next: null
    })
    //Second
    initialFullPages[1]["slides"].push({
      anchor: "equipo",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      borderColor: "border-naranja",
      headerBackground: "negro-transparent",
      secondMenuBackground: "transparent-negro",
      title: "Equipo",
      autores: authors,
      prev: initialFullPages[1]["slides"][0],
      next: null
    })
    //Third
    initialFullPages[1]["slides"].push({
      anchor: "colaboradores",
      backgroundColor: "bg-naranja",
      textColor: "text-blanco",
      titleColor: "text-negro",
      borderColor: "border-negro",
      headerBackground: "naranja-transparent",
      secondMenuBackground: "transparent-naranja",
      title: "Colaboran",
      autores: colaboradoresAll,
      prev: initialFullPages[1]["slides"][1]
    })

    //Arrows
    initialFullPages[1]["slides"][0].next = initialFullPages[1]["slides"][1]
    initialFullPages[1]["slides"][1].next = initialFullPages[1]["slides"][2]

  }

  function getBlogPosts() {
    initialFullPages[2]["slides"] = []
    //First
    initialFullPages[2]["slides"].push({
      anchor: "blog",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja",
      borderColor: "border-naranja",
      headerBackground: "negro-transparent",
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
        borderColor: "border-naranja",
        headerBackground: "blanco-transparent",
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        anchor: "blog" + node.fields.slug
      })
    })

  }


  getQueHacemosSlides()
  getNosotrosSlides()
  getBlogPosts()

  const transparentColors = {
    textColor: "text-transparent",
    titleColor: "text-transparent",
    backgroundColor: "bg-transparent",
    borderColor: "border-transparent",
    headerBackground: "transparent-transparent",
    secondMenuBackground: "transparent-transparent"
  }

  const [fullpages] = useState(initialFullPages)
  const [lastSlides, setLastSlides] = useState(initialLastSlides)
  const [currentPage, setCurrentPage] = useState(fullpages[0])
  const [currentSlide, setCurrentSlide] = useState(fullpages[0])
  const [floatingComponentsColors, setFloatingComponentsColors] = useState(transparentColors)

  function onAfterLoad(origin, destination, direction) {
    setFloatingComponentsColors({
      backgroundColor: currentSlide.backgroundColor,
      textColor: currentSlide.textColor,
      titleColor: currentSlide.titleColor,
      borderColor: currentSlide.borderColor,
      headerBackground: currentSlide.headerBackground,
      secondMenuBackground: currentSlide.secondMenuBackground
    })

  }

  function onLeavePage(origin, destination, direction) {
    setFloatingComponentsColors(transparentColors)
    setCurrentSlide(fullpages[destination.index].slides[lastSlides[destination.index].lastSlide])
    setCurrentPage(fullpages[destination.index])
  }

  function onAfterSlideLoad(section, origin, destination, direction) {
    setFloatingComponentsColors({
      backgroundColor: currentSlide.backgroundColor,
      textColor: currentSlide.textColor,
      titleColor: currentSlide.titleColor,
      borderColor: currentSlide.borderColor,
      headerBackground: currentSlide.headerBackground,
      secondMenuBackground: currentSlide.secondMenuBackground
    })

  }

  function onLeaveSlide(section, origin, destination, direction) {
    setFloatingComponentsColors(transparentColors)
    setCurrentSlide(fullpages[section.index].slides[destination.index])
    setCurrentPage(fullpages[section.index])
    lastSlides[section.index].lastSlide = destination.index
    setLastSlides(lastSlides)
  }



  return (
    <div>
      <Header pages={fullpages} backgroundColor={currentSlide.backgroundColor} colors={floatingComponentsColors} currentSlide={currentSlide}
              textColor={currentSlide.textColor} fromColor={currentSlide.headerBackground} currentPage={currentPage}/>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={700}
        menu='#menu-principal'
        animateAnchor={true}
        loopHorizontal={false}
        scrollOverflow={true}
        // scrollOverflowOptions={{}}
        scrollOverflowReset={true}
        recordHistory={true}
        navigation={false}
        controlArrows={false}
        slidesNavigation={false}
        onLeave={onLeavePage.bind(this)}
        onSlideLeave={onLeaveSlide.bind(this)}
        verticalCentered={true}
        //normalScrollElements={".scrollable-content"}
        afterLoad={onAfterLoad.bind(this)}
        afterSlideLoad={onAfterSlideLoad.bind(this)}
        //fixedElements={"#header-principal"}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SimpleIntroPage pages={fullpages} currentPage={currentSlide} pagePos="0" fullPageApi={fullpageApi}/>
              <AboutPage pages={fullpages} currentPage={currentPage} currentSlide={currentSlide} pagePos="1"
                         fullPageApi={fullpageApi}/>
              <BlogPage pages={fullpages} currentPage={currentSlide} pagePos="2" fullPageApi={fullpageApi}/>
            </ReactFullpage.Wrapper>
          )
        }}
      />
      <SecondMenu currentPage={currentPage} currentSlide={currentSlide} colors={floatingComponentsColors}/>
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
      email
      gitlab
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
    colaboradores: allColaboradoresYaml {
    nodes {
      bio
      name
      email
      gitlab
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
              email
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