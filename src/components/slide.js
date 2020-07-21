import React from "react"
import SEO from "./seo"
import Header from "./header"

const Slide = ({ location, color, title, description, children }) => {

  return (
    <div className={"slide " + color} data-anchor={location}>
      <div className="h-full">
      <SEO title={title} description={description}/>
      <Header location={location}></Header>
      <main className="container mx-auto ">
        {children}
      </main>
      <footer></footer>
      </div>
    </div>
  )
}

export default Slide
