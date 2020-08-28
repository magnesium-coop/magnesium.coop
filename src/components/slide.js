import React from "react"

const Slide = (props) => {

  const backgroundColor = "bg-"+props.currentSlide.colors.backgroundColor
  const textColor = "border-"+props.currentSlide.colors.textColor

  return (
    <div className={"slide " + backgroundColor + " " + textColor} data-anchor={props.currentSlide.anchor}>
      <main className="h-full">
        <div className="h-full mx-12 md:mx-20 lg:mx-42 my-auto">
          <div className="h-full pt-32 lg:pt-0 pb-10 lg:pb-0 tracking-tighter md:tracking-tight">
          {props.children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Slide
