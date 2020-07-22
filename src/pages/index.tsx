// Gatsby supports TypeScript natively!
// @ts-ignore
import React, { useState } from "react"
import { PageProps, graphql } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"

import AboutPage from "../pages/about"
import IntroPage from "../pages/intro"
import BlogPage from "../pages/blog"
import ProjectsPage from "../pages/projects"
import Header from "../components/header"

const components = {
  nosotros: AboutPage,
  intro: IntroPage,
  blog: BlogPage,
  proyectos: ProjectsPage
}


const BlogIndex = ({ data, location }) => {

  const initialFullPages = [
    {
      title: "Qué Hacemos",
      anchor: "intro",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja"
    },
    {
      title: "Nosotros",
      anchor: "nosotros",
      backgroundColor: "bg-blanco",
      textColor: "text-negro",
      titleColor: "text-naranja"
    },
    {
      title: "Blog",
      anchor: "blog",
      backgroundColor: "bg-negro",
      textColor: "text-blanco",
      titleColor: "text-naranja"

    },
    {
      title: "Proyectos",
      anchor: "proyectos",
      backgroundColor: "bg-blanco",
      textColor: "text-negro",
      titleColor: "text-naranja"
    }
  ]
  const [fullpages] = useState(initialFullPages)
  const [currentPage, setCurrentPage] = useState(fullpages[0])

  function onLeavePage(origin, destination, direction) {
    //console.log("onLeave", { origin, destination, direction })
    setCurrentPage(fullpages[destination.index])
  }

  return (
    <div>
      <Header pages={fullpages} anchor={currentPage.anchor} backgroundColor={currentPage.backgroundColor}
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
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {
                fullpages.map(({ anchor, title, backgroundColor, textColor, titleColor }) => (
                  React.createElement(components[anchor], {
                    key: "page-"+anchor,
                    anchor: anchor,
                    title: title,
                    backgroundColor: backgroundColor,
                    textColor: textColor,
                    titleColor: titleColor,
                    fullPageApi: fullpageApi
                  })
                ))
              }
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>

  )
}

export default BlogIndex