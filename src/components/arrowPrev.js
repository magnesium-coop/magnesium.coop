import React from "react"
import { IoIosArrowBack } from "react-icons/io"

const ArrowPrev = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined && arrow !== null) {
    return (
      <div
        className={"flex items-center customArrow customArrowPrev my-auto w-8 h-32 md:w-10 md:h-20 lg:w-24 lg:h-48 bg-transparent md:bg-"+arrow.colors.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor}
           className={"h-full w-full no-underline text-2xl md:text-4xl lg:text-5xl text-"+arrow.colors.backgroundColor+" md:text-"+arrow.colors.textColor}
          >
          <div className="h-full w-full flex flex-wrap lg:flex-no-wrap justify-around align-center content-center">
            <span style={{writingMode: "vertical-rl"}}
                  className={"mx-auto mb-1 md:my-auto text-xs lg:text-sm whitespace-no-wrap uppercase text-"+arrow.colors.backgroundColor+" md:text-"+arrow.colors.textColor}>{arrow.title}
            </span>
            <span className="mx-auto mt-1 md:my-auto"><IoIosArrowBack/></span>
          </div>
        </a>
      </div>
    )
  } else {
    return (null)
  }

}

export default ArrowPrev
