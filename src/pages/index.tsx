// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"
import ReactFullpage from "@fullpage/react-fullpage"


import AboutPage from "../pages/about"
import IntroPage from "../pages/intro"
import BlogPage from "../pages/blog"
import Header from "../components/header"


const BlogIndex = ({ data, location }) => {

  return (
    <div>
      <Header/>
      <ReactFullpage
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={700}
        menu='#menu-principal'
        scrollOverflow={true}
        fixedElements='#header-principal'
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <IntroPage location={"que-hacemos"}></IntroPage>
              <AboutPage location={"nosotros"}></AboutPage>
              <BlogPage location={"blog"} fullPageApi={fullpageApi}></BlogPage>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>

  )
}

export default BlogIndex