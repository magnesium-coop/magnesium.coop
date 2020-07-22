// Gatsby supports TypeScript natively!
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
      title: "Intro",
      anchor: "intro",
      backgroundColor: "negro",
      textColor: "blanco",
      titleColor: "naranja"
    },
    {
      title: "Nosotros",
      anchor: "nosotros",
      backgroundColor: "blanco",
      textColor: "negro",
      titleColor: "naranja"
    },
    {
      title: "Blog",
      anchor: "blog",
      backgroundColor: "negro",
      textColor: "blanco",
      titleColor: "naranja"

    },
    {
      title: "Proyectos",
      anchor: "proyectos",
      backgroundColor: "blanco",
      textColor: "negro",
      titleColor: "naranja"
    }
  ]
  const [fullpages] = useState(initialFullPages)
  const [currentPage, setCurrentPage] = useState(fullpages[0])

  function onLeavePage(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    setCurrentPage(fullpages[destination.index])
  }

  return (
    <div>
      <Header anchor={currentPage.anchor} backgroundColor={currentPage.backgroundColor} textColor={currentPage.textColor}/>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={700}
        menu='#menu-principal'
        scrollOverflow={true}
        fixedElements='#header-principal'
        onLeave={onLeavePage.bind(this)}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {
                fullpages.map(({ anchor, title, backgroundColor, textColor, titleColor }) => (
                  React.createElement(components[anchor], {
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