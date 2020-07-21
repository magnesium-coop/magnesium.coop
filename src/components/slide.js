import React from "react"
import SEO from "./seo"

const Slide = ({ location, color, title, description, children }) => {

  return (
    <div className={"slide " + color} data-anchor={location}>
      <div className="h-full mt-40">
      <SEO title={title} description={description}/>
      <main className="container mx-auto ">
        {children}
      </main>
      <footer></footer>
      </div>
    </div>
  )
}

export default Slide
