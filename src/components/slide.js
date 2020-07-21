import React from "react"
import SEO from "./seo"
import Header from "./header"

const Slide = ({ location, color, backgroundColor, title, description, children }) => {

  return (
    <div className={"slide bg-" + backgroundColor +" text-"+color} data-anchor={location}>
      <div className="h-full">
      <SEO title={title} description={description}/>
      <Header location={location} color={color} backgroundColor={backgroundColor}></Header>
      <main className="container mx-auto ">
        {children}
      </main>
      <footer></footer>
      </div>
    </div>
  )
}

export default Slide
