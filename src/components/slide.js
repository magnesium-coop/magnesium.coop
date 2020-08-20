import React from "react"

const Slide = (props) => {


  return (
    <div className={"slide " + props.backgroundColor + " " + props.textColor} data-anchor={props.slideAnchor}>
      <main className="h-full">
        <div className="h-full mx-8 md:mx-32 lg:mx-56 my-auto">
        {props.children}
        </div>
      </main>
    </div>
  )
}

export default Slide
