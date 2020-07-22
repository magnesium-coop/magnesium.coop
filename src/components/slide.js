import React from "react"
import SEO from "./seo"

const Slide = ({ titleColor, textColor, backgroundColor, seoTitle, seoDescription, children, slideAnchor }) => {


  return (
    <div className={"slide " + backgroundColor + " " + textColor} data-anchor={slideAnchor}>
        <SEO title={seoTitle} description={seoDescription}/>
        <main className="ml-40 mr-40 self-center">
          {children}
        </main>
        <footer></footer>
    </div>
  )
}

export default Slide
