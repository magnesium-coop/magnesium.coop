import React from "react"

const Slide = (props) => {


  return (
    <div className={"slide pt-40 " + props.backgroundColor + " " + props.textColor} data-anchor={props.slideAnchor}>
      <main className="ml-16 mr-16 md:ml-32 md:mr-32 lg:ml-40 lg:mr-40 self-center">
        {props.children}
      </main>
      <footer></footer>

    </div>
  )
}

export default Slide
