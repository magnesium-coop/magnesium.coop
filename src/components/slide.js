import React from "react"

const Slide = (props) => {


  return (
    <div className={"slide pt-32 pb-20 " + props.backgroundColor + " " + props.textColor} data-anchor={props.slideAnchor}>
      <main className="h-full ml-10 mr-10 md:ml-32 md:mr-32 lg:ml-56 lg:mr-56">
        <div className="scrollable-content">
        {props.children}
        </div>
      </main>
    </div>
  )
}

export default Slide
