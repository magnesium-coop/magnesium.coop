import React from "react"
import { IoIosArrowForward } from "react-icons/io"

const ArrowNext = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined && arrow !== null) {
    return (
      <div
        className={"flex items-center customArrow customArrowNext my-auto w-8 h-40 md:w-10 md:h-20 lg:w-24 lg:h-48 " + arrow.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor}
           className={"h-full w-full no-underline text-3xl md:text-4xl lg:text-5xl " + arrow.textColor}
           onClick={(e) => {
             e.preventDefault()
             console.log(anchor, arrow.anchor)
             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <div className="h-full w-full flex flex-wrap lg:flex-no-wrap justify-around align-center content-center">
            <span className="mx-auto my-auto">
              <IoIosArrowForward/>
            </span>
            <span style={{writingMode: "sideways-lr"}}
              className={"mx-auto my-auto text-sm whitespace-no-wrap uppercase " + arrow.textColor}>{arrow.title}
            </span>
          </div>

        </a>
      </div>
    )
  } else {
    return (null)
  }
}

export default ArrowNext
