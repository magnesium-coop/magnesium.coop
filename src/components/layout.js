import React from "react"

const Layout = ({ location, color, title, children }) => {

  return (
    <div className={"section font-mgbook"} data-anchor={location}>
       {children}
    </div>
  )
}

export default Layout
