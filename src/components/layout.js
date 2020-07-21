import React from "react"

const Layout = ({ location, color, title, children }) => {

  return (
    <div className={"section"} data-anchor={location}>
       {children}
    </div>
  )
}

export default Layout
