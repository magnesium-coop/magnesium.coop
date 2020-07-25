import React from "react"
import { IoIosArrowBack } from "react-icons/io"

const ArrowPrev = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined) {
    return (
      <div className={"flex items-center customArrow customArrowPrev w-10 h-20 md:w-20 md:h-40 lg:w-24 lg:h-48 " + arrow.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor} className={"mx-auto text-3xl md:text-4xl lg:text-5xl " + arrow.textColor}
           onClick={(e) => {
             e.preventDefault()
             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <span className={""}><IoIosArrowBack/></span>

        </a>
      </div>
    )
  } else {
    return (null)
  }

}

export default ArrowPrev