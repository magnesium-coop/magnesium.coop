/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"

const ArrowNext = ({ arrow }) => {
  if (arrow !== undefined) {
    console.log(arrow)

    return (
      <div className={"customArrow customArrowNext "+arrow.backgroundColor}>

      </div>
    )
  } else {
    return (null)  }
}

export default ArrowNext
