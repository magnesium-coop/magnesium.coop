import React, { useState } from "react"
import { IoIosArrowUp } from "react-icons/io"

const Footer = (props) => {

  const [isExpanded, toggleExpansion] = useState(false)


  return (

    <footer className={"flex absolute bottom-0 right-0 w-56 z-40 mr-24 text-l bg-naranja text-white font-mgbook"} id="footer-principal">
      <div className={"flex h-10 w-full"}>
        <button className={"flex w-full h-full items-center justify-center"} onClick={() => toggleExpansion(!isExpanded)}>
          <span>Contacto</span><span className={"w-3"}></span><span className={"text-xl"}><IoIosArrowUp/></span>
        </button>

      </div>
      <div className={`${isExpanded ? `block` : `hidden`} flex-grow h-48`}>
      </div>
    </footer>
  )
}

export default Footer
