import React from "react"
import SEO from "./seo"
import Header from "./header"

const Slide = ({ titleColor, textColor, backgroundColor, seoTitle, seoDescription, children }) => {

  return (
    <div className={"slide bg-" + backgroundColor +" text-"+textColor}>
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
