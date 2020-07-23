/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import logomg01 from "../../content/assets/logo-mg-01.svg"

const ArrowPrev = ({ arrow }) => {


    return (
      <div className={"z-40 customArrow customArrowPrev " + arrow.backgroundColor}>

      </div>
    )


}

export default ArrowPrev
