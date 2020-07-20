import React from "react"

const Layout = ({ location, color, title, children }) => {

  return (
    <div className={"section"} data-anchor={location}>
      <main>
       {children}
      </main>
    </div>
  )
}

export default Layout
