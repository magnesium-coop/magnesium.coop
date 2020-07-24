import React from "react"

const Layout = ({ anchor, children }) => {

  return (
    <div className={"section font-mgbook"} data-anchor={anchor}>
      {children}
    </div>
  )
}

export default Layout
