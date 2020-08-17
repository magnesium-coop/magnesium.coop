import React from "react"
import { IoIosArrowForward } from "react-icons/io"

const ArrowNext = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined) {
    console.log(arrow)
    return (
      <div
        className={"flex items-center customArrow customArrowNext w-10 h-20 md:w-20 md:h-40 lg:w-24 lg:h-48 " + arrow.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor}
           className={"mx-auto no-underline text-3xl md:text-4xl lg:text-5xl " + arrow.textColor}
           onClick={(e) => {
             e.preventDefault()
             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <div className="flex justify-center">
            <span className={"ml-3"}><IoIosArrowForward/></span>
            <div className="text-lg whitespace-no-wrap uppercase transform -rotate-90 -ml-5">
              <span className={arrow.titleColor}>{arrow.title}</span>
            </div>
          </div>
        </a>
      </div>
    )
  } else {
    return (null)
  }
}

export default ArrowNext
