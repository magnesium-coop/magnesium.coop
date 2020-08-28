import React from "react"

const Layout = ({ anchor, children }) => {

  return (
      <div className={"section font-mgbook"} data-anchor={anchor}>
        <article className="h-full">
        {children}
        </article>
    </div>
  )
}

export default Layout
