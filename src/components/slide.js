import React from "react"

const Slide = (props) => {


  return (
    <div className={"slide pt-32 " + props.backgroundColor + " " + props.textColor} data-anchor={props.slideAnchor}>
      <main className="ml-10 mr-10 md:ml-32 md:mr-32 lg:ml-56 lg:mr-56">
        {props.children}
      </main>
      <footer></footer>

    </div>
  )
}

export default Slide
