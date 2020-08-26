import React from "react"
import { IoIosArrowForward } from "react-icons/io"

const ArrowNext = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined) {
    return (
      <div className={"flex items-center customArrow customArrowNext mt-32 mb-auto md:mt-auto lg:my-auto w-8 h-16 md:w-10 md:h-20 lg:w-24 lg:h-48 " + arrow.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor} className={"mx-auto no-underline text-3xl md:text-4xl lg:text-5xl " + arrow.textColor}
           onClick={(e) => {
             e.preventDefault()
             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <div className="flex justify-center items-center">
            <span><IoIosArrowForward/></span>
            <div>
              <div className="invisible lg:visible relative h-20 w-10 min-w-full">
                <span
                  className={"arrowText rotateArrowTextNext text-sm whitespace-no-wrap uppercase " + arrow.titleColor}>{arrow.title}</span>
              </div>

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
