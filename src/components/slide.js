import React from "react"
import SEO from "./seo"

const Slide = ({ titleColor, textColor, backgroundColor, seoTitle, seoDescription, children, slideAnchor }) => {

  return (
    <div className={"slide bg-" + backgroundColor +" text-"+textColor} data-anchor={slideAnchor}>
      <div className="h-full">
      <SEO title={seoTitle} description={seoDescription}/>
      <main className="container mx-auto mt-48">
        {children}
      </main>
      <footer></footer>
      </div>
    </div>
  )
}

export default Slide
