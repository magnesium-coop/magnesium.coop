// Gatsby supports TypeScript natively!
// @ts-ignore
import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"


import AboutPage from "../components/about"
import BlogPage from "../components/blog"
import ProjectsPage from "../components/projects"
import Header from "../components/header"
import SimpleIntroPage from "../components/simpleIntro"
import Footer from "../components/footer"

function removeSlash(text) {
  if (text !== undefined) {
    return text.replace(/\//g, "")
  } else return ""
}

const BlogIndex = ({ data }) => {


  /**
   * La estrategia es recorres todas las queries necesarias y armar todo aca el arbol. Luego tenerlo como referencia.
   */
  const colorsBlack = {
    backgroundColor: "negro",
    textColor: "blanco",
    titleColor: "naranja",
    borderColor: "naranja",
    headerBackground: "negro-transparent",
    secondMenuBackground: "transparent-blanco"
  }
  const colorsWhite = {
    backgroundColor: "blanco",
    textColor: "negro",
    titleColor: "naranja",
    borderColor: "naranja",
    headerBackground: "blanco-transparent",
    secondMenuBackground: "transparent-blanco"
  }
  const colorsNaranja = {
    backgroundColor: "naranja",
    textColor: "blanco",
    titleColor: "negro",
    borderColor: "negro",
    headerBackground: "naranja-transparent",
    secondMenuBackground: "transparent-naranja"
  }
  const transparentColors = {
    textColor: "transparent",
    titleColor: "transparent",
    backgroundColor: "transparent",
    borderColor: "transparent",
    headerBackground: "transparent-transparent",
    secondMenuBackground: "transparent-transparent"
  }
  const initialFullPages = [
    {
      title: "Qué Hacemos",
      anchor: "intro",
      colors: colorsBlack,
      slides: [],
      secondMenu: false
    },
    {
      title: "Nosotros",
      anchor: "nosotros",
      colors: colorsWhite,
      slides: [],
      secondMenu: true
    },
    {
      title: "Proyectos",
      anchor: "proyectos",
      colors: colorsBlack,
      slides: [],
      secondMenu: false
    },
    {
      title: "Blog",
      anchor: "blog",
      colors: colorsBlack,
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
        colors: initialFullPages[0].colors,
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
      colors: initialFullPages[1].colors,
      title: "Nosotros",
      next: null
    })
    //Second
    initialFullPages[1]["slides"].push({
      anchor: "equipo",
      colors: colorsBlack,
      title: "Equipo",
      autores: authors,
      prev: initialFullPages[1]["slides"][0],
      next: null
    })
    //Third
    initialFullPages[1]["slides"].push({
      anchor: "colaboradores",
      colors: colorsNaranja,
      title: "Colaboran",
      autores: colaboradoresAll,
      prev: initialFullPages[1]["slides"][1]
    })

    //Arrows
    initialFullPages[1]["slides"][0].next = initialFullPages[1]["slides"][1]
    initialFullPages[1]["slides"][1].next = initialFullPages[1]["slides"][2]

  }

  function getBlogPosts() {
    initialFullPages[3]["slides"] = []
    //First
    initialFullPages[3]["slides"].push({
      anchor: "blog",
      colors: colorsBlack,
      title: "Blog",
      prev: null,
      next: null
    })
    //Rest
    data.blogPosts.edges.map(({ node }, index) => {
      initialFullPages[3]["slides"].push({
        slug: node.fields.slug,
        description: node.frontmatter.description,
        excerpt: node.excerpt,
        date: node.frontmatter.date,
        html: node.html,
        colors: colorsWhite,
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        anchor: removeSlash(node.fields.slug),
        prev: {
          anchor: index === 0 ? "" : removeSlash(initialFullPages[3]["slides"][index].slug),
          colors: index === 0 ? colorsBlack : colorsNaranja,
          title: "Anterior"
        },
        next: null
      })
    })


    for (let index = 0; index < initialFullPages[3].slides.length - 1; index++) {
      initialFullPages[3].slides[index].next = {
        anchor: removeSlash(initialFullPages[3]["slides"][index + 1].slug),
        colors: colorsNaranja,
        title: "Siguiente"
      }
    }

  }

  function getProjects() {
    initialFullPages[2]["slides"] = []
    //First
    initialFullPages[2]["slides"].push({
      anchor: "projects",
      colors: colorsNaranja,
      title: "Proyectos"
    })
    //Rest
    data.projects.edges.map(({ node }, index) => {
      initialFullPages[2]["slides"].push({
        excerpt: node.excerpt,
        html: node.html,
        id: node.id,
        slug: node.fields.slug,
        title: node.frontmatter.title,
        author: node.frontmatter.author,
        elementname: node.frontmatter.elementname,
        name: node.frontmatter.name,
        description: node.frontmatter.description,
        startdate: node.frontmatter.startdate,
        duration: node.frontmatter.duration,
        totalbudget: node.frontmatter.totalbudget,
        client: node.frontmatter.client,
        satisfactionletter: node.frontmatter.satisfactionletter,
        technologies: node.frontmatter.technologies || [],
        image: node.frontmatter.image,
        link: node.frontmatter.link,
        managers: node.frontmatter.managers || [],
        colors: colorsBlack,
        anchor: removeSlash(node.fields.slug),
        prev: {
          anchor: index === 0 ? "" : removeSlash(initialFullPages[2]["slides"][index].slug),
          colors: index === 0 ? colorsNaranja : colorsBlack,
          title: "Anterior"
        },
        next: null
      })
    })

    for (let index = 0; index < initialFullPages[2].slides.length - 1; index++) {
      initialFullPages[2].slides[index].next = {
        anchor: removeSlash(initialFullPages[2]["slides"][index + 1].slug),
        colors: colorsBlack,
        title: "Siguiente"
      }
    }

  }

  getQueHacemosSlides()
  getNosotrosSlides()
  getBlogPosts()
  getProjects()

  const [isLoaded, setIsLoaded] = useState(false)
  const [fullpages] = useState(initialFullPages)
  const [lastSlides, setLastSlides] = useState(initialLastSlides)
  const [currentPage, setCurrentPage] = useState(fullpages[0])
  const [currentSlide, setCurrentSlide] = useState(fullpages[0])
  const [size, setSize] = useState([500, 500])
  const [floatingComponentsColors, setFloatingComponentsColors] = useState(transparentColors)
  const [typingText, setTypingText] = useState(null)

  function resetScroll(destination) {
    const fpSc = destination.item.getElementsByClassName("fp-scrollable")
    if (fpSc.length > 0) {
      var IScroll = fpSc[0].fp_iscrollInstance
      IScroll.scrollTo(0, 0, 0)
    }
  }

  function onAfterLoad(origin, destination, direction) {
    setFloatingComponentsColors(currentSlide.colors)
    if (typingText && destination.anchor === "software") {
      typingText.start()
    }
  }

  function onLeavePage(origin, destination, direction) {
    setFloatingComponentsColors(transparentColors)
    setCurrentSlide(fullpages[destination.index].slides[lastSlides[destination.index].lastSlide])
    setCurrentPage(fullpages[destination.index])
    if (typingText && origin.anchor === "intro") {
      typingText.toggle()
    }
    resetScroll(origin)
  }

  function onAfterSlideLoad(section, origin, destination, direction) {
    setFloatingComponentsColors(currentSlide.colors)
    if (typingText && destination.anchor === "software") {
      typingText.start()
    }
  }

  function onLeaveSlide(section, origin, destination, direction) {
    setFloatingComponentsColors(transparentColors)
    setCurrentSlide(fullpages[section.index].slides[destination.index])
    setCurrentPage(fullpages[section.index])
    lastSlides[section.index].lastSlide = destination.index
    setLastSlides(lastSlides)
    if (typingText && origin.anchor === "software") {
      typingText.toggle()
    }
    resetScroll(origin)
  }

  function onResize(width, height) {
    setSize([width, height])
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded)
    return (<div
      key={`loader`}
      id="___loader"
      className="typed-cursor"
      style={{
        alignItems: "center",
        fontSize: "large",
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 100
      }}
    >
      <span>|</span>
    </div>)
  else
    return (
      <div style={{backgroundColor:"black"}}>
        <Header pages={fullpages}
                colors={floatingComponentsColors}
                currentSlide={currentSlide}
                currentPage={currentPage}/>
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={700}
          menu='#menu-principal'
          animateAnchor={true}
          loopHorizontal={false}
          scrollOverflow={true}
          scrollOverflowOptions={{
            scrollbars: "custom"
          }}
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
          afterResize={onResize.bind(this)}
          //fixedElements={"#header-principal"}
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <SimpleIntroPage size={size} setTypingText={setTypingText.bind(this)} pages={fullpages}
                                 currentSlide={currentSlide} pagePos="0" fullPageApi={fullpageApi}/>
                <AboutPage pages={fullpages} currentPage={currentPage} currentSlide={currentSlide} pagePos="1"
                           fullPageApi={fullpageApi}/>
                <ProjectsPage pages={fullpages} currentPage={currentPage} currentSlide={currentSlide} pagePos="2"
                              fullPageApi={fullpageApi}/>

                <BlogPage pages={fullpages} currentPage={currentPage} currentSlide={currentSlide} pagePos="3"
                          fullPageApi={fullpageApi}/>
              </ReactFullpage.Wrapper>
            )
          }}
        />
        <Footer currentSlide={currentSlide} siteMetadata={data.site.siteMetadata}/>
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
  site {
    siteMetadata {
      title
      contacto {
        telefono
        direccion
        email
        support
      }
      description
      siteUrl
      social {
        twitter
        linkedin
        instagram
        gitlab
      }
    }
  }
  projects:allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {fileAbsolutePath: {regex: "/(projects)/.*\\\\.md$/"}}
    limit: 1000
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
            title
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
            elementname
            name          
            description
            startdate
            duration
            totalbudget
            client
            satisfactionletter
            technologies{
              technology {
                id
                name
                version
                description
                url
              }
            }
            image
            link          
            managers {
              manager{
                id
                email
                name
                twitter
              }
            }
          }
        }
      }
    }
  }
  
`
