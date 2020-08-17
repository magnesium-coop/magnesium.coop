import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io/index"

const ArrowPrev = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined) {
    return (
      <div className={"flex items-center customArrow customArrowPrev w-10 h-20 md:w-20 md:h-40 lg:w-24 lg:h-48 " + arrow.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor} className={"mx-auto text-3xl md:text-4xl lg:text-5xl " + arrow.textColor}
           onClick={(e) => {
             e.preventDefault()
             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <div className="flex justify-center">
            <span className={"mr-3"}><IoIosArrowBack/></span>
            {/*<div className="text-lg whitespace-no-wrap uppercase transform -rotate-90 -mr-5">
              <span className={arrow.titleColor}>{arrow.title}</span>
            </div>*/}
          </div>
        </a>
      </div>
    )
  } else {
    return (null)
  }

}

export default ArrowPrev
