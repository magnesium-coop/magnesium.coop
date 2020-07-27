import React, { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Footer = (props) => {

  const [isExpanded, toggleExpansion] = useState(false)


  return (
    <div>
      <footer className={"hidden md:block flex absolute bottom-0 right-0 w-56 z-40 mr-24 text-l bg-naranja"}
              id="footer-principal-bottom">
        <div className={"flex h-10 w-full"}>
          <a href="#" className={"flex w-full h-full items-center justify-center text-white font-mgbook no-underline"}
             onClick={() => toggleExpansion(!isExpanded)}>
            <span>Contacto</span><span className={"w-3"}></span>
            <span className={`${isExpanded ? `block` : `hidden`} text-xl`}><IoIosArrowDown/></span>
            <span className={`${isExpanded ? `hidden` : `block`} text-xl`}><IoIosArrowUp/></span>
          </a>

        </div>
        <div className={`${isExpanded ? `block` : `hidden`} flex-grow h-48`}>
        </div>
      </footer>

      <footer className={"hidden md:block flex absolute bottom-0 right-0 w-56 z-40 mb-24 text-l bg-naranja"} id="footer-principal-side">
        <div className={"flex w-10 h-full"}>
          <a href="#" className={"flex w-full h-full items-center justify-center text-white font-mgbook no-underline"}
             onClick={() => toggleExpansion(!isExpanded)}>
            <span>Contacto</span><span className={"w-3"}></span>
            <span className={`${isExpanded ? `block` : `hidden`} text-xl`}><IoIosArrowDown/></span>
            <span className={`${isExpanded ? `hidden` : `block`} text-xl`}><IoIosArrowUp/></span>
          </a>

        </div>
        <div className={`${isExpanded ? `block` : `hidden`} flex-grow h-48`}>
        </div>
      </footer>
    </div>


  )
}

export default Footer
