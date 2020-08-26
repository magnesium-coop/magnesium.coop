import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io/index"

const ArrowPrev = ({ arrow, anchor, fullPageApi }) => {
  if (arrow !== undefined && arrow !== null) {
    return (
      <div className={"flex items-center customArrow customArrowPrev mt-32 mb-auto md:mt-auto lg:my-auto w-8 h-16 md:w-10 md:h-20 lg:w-24 lg:h-48 " + arrow.backgroundColor}>
        <a href={"#" + anchor + "/" + arrow.anchor} className={"mx-auto no-underline text-3xl md:text-4xl lg:text-5xl " + arrow.textColor}
           onClick={(e) => {
             e.preventDefault()
             console.log(anchor, arrow.anchor)

             fullPageApi.moveTo(anchor, arrow.anchor)
           }}>
          <div className="flex justify-center items-center">
            <div className="order-2 lg:order-1">
              <div className="invisible lg:visible relative h-20 w-10 min-w-full">
                <span
                  className={"arrowText rotateArrowTextPrev text-sm whitespace-no-wrap uppercase " + arrow.titleColor}>{arrow.title}</span>
              </div>
            </div>
            <span className="order-1 lg:order-2"><IoIosArrowBack/></span>

          </div>
        </a>
      </div>
    )
  } else {
    return (null)
  }

}

export default ArrowPrev
