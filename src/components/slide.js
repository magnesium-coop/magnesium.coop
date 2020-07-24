import React from "react"
import SEO from "./seo"
import ArrowNext from "./arrowNext"
import ArrowPrev from "./arrowPrev"

const Slide = (props) => {


  return (
    <div className={"slide " + props.backgroundColor + " " + props.textColor} data-anchor={props.slideAnchor}>
        <main className="ml-40 mr-40 self-center">
          {props.children}
        </main>
        <footer></footer>

    </div>
  )
}

export default Slide
