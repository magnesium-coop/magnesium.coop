import React from "react"

const Layout = ({ anchor, children, backgroundColor }) => {

  return (
      <div className={"section font-mgbook"} data-anchor={anchor}>
        {children}
    </div>
  )
}

export default Layout
