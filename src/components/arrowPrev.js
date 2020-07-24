/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const ArrowPrev = ({ arrow }) => {
  if (arrow !== undefined) {


    return (
      <div className={"z-3 customArrow customArrowPrev " + arrow.backgroundColor}>

      </div>
    )
  } else {
    return (null)
  }

}

export default ArrowPrev
