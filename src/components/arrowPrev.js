import React from "react"
import { IoIosArrowBack } from "react-icons/io"

const ArrowPrev = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined && arrow !== null) {
    return (
      <div
        className={"flex items-center customArrow customArrowPrev my-auto w-8 h-32 md:w-10 md:h-20 lg:w-24 lg:h-48 "}>
        <a href={"#" + anchor + "/" + arrow.anchor}
           className={"h-full w-full no-underline text-3xl md:text-4xl lg:text-5xl text-negro"}
           onClick={(e) => {
             e.preventDefault()
             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <div className="h-full w-full flex flex-wrap lg:flex-no-wrap justify-around align-center content-center">
            <span style={{writingMode: "sideways-lr"}}
                  className={"order-2 lg:order-1 mx-auto my-auto text-xs lg:text-sm whitespace-no-wrap uppercase text-negro"}>{arrow.title}
            </span>
            <span className="order-1 lg:order-2 mx-auto my-auto"><IoIosArrowBack/></span>
          </div>
        </a>
      </div>
    )
  } else {
    return (null)
  }

}

export default ArrowPrev
