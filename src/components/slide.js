import React from "react"
import Header from "../components/header"
import SEO from "./seo"

const Slide = ({ location, color, title, children }) => {

  return (
    <div className={"slide " + color}>
      <SEO title={title}/>
      <Header location={location} color={color}>
      </Header>
      <main className="h-screen container mx-auto">
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Slide
