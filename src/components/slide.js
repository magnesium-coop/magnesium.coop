import React from "react"

const Slide = (props) => {


  return (
    <div className={"slide pt-32 " + props.backgroundColor + " " + props.textColor} data-anchor={props.slideAnchor}>
      <main className="mx-8 md:mx-32 lg:mx-56 mb-56">
        <div>
        {props.children}
        </div>
      </main>
    </div>
  )
}

export default Slide
