import React, { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { FaRegEnvelope } from "react-icons/fa"
import { FiGitlab, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"
import { IconContext } from "react-icons"

const Footer = ({ currentSlide, siteMetadata }) => {

  const backgroundColor = "bg-" + currentSlide.colors.backgroundColor
  const borderColor = "border-" + currentSlide.colors.borderColor
  const textColor = "text-" + currentSlide.colors.textColor

  const [isExpanded, toggleExpansion] = useState(false)


  return (
    <div>
      <footer className={"flex absolute bottom-0 right-0 mr-10 md:mr-32 w-12 md:w-56 z-40 text-l bg-naranja shadow-sm rounded-tr-lg rounded-tl-lg"}
              id="footer-principal-bottom">
        <div className="w-full flex flex-col">
          <div className={"w-full flex h-8 md:h-10"}>
            <a href="#" className={"flex visible md:invisible w-full md:w-0 h-full items-center justify-center text-white font-mgbook no-underline"}
               onClick={() => toggleExpansion(!isExpanded)}>
              <span className={"text-lg"}><FaRegEnvelope/></span>
            </a>
            <a href="#" className={"flex invisible md:visible w-0 md:w-full h-full items-center justify-center text-white font-mgbook no-underline"}
               onClick={() => toggleExpansion(!isExpanded)}>
              <span>Contacto</span><span className={"w-3"}></span>
              <span className={`${isExpanded ? `block` : `hidden`} text-xl`}><IoIosArrowDown/></span>
              <span className={`${isExpanded ? `hidden` : `block`} text-xl`}><IoIosArrowUp/></span>
            </a>

          </div>
          <div
            className={`${isExpanded ? `block` : `hidden`} flex content-center flex-col flex-grow h-48 mx-5 text-white font-mgbook no-underline`}>
            <div className="h-full">
              <p>Escribinos a <a href={"mailto:" + siteMetadata.contacto.email} className={"no-underline text-white "}>
                {siteMetadata.contacto.email}
              </a></p>
              <p className="mt-3">Si necesitás soporte a: <a href={"mailto:" + siteMetadata.contacto.support}
                                                             className={"no-underline text-white "}>
                {siteMetadata.contacto.support}
              </a></p>
            </div>
            <div className="mb-3 flex items-center justify-around">
              <IconContext.Provider value={{ color: "white", className: "mx-1 text-xs lg:text-sm" }}>
                <div>
                  <a href={"mailto:" + siteMetadata.contacto.email} className={"no-underline text-white "}>
                    <FaRegEnvelope/>
                  </a>
                </div>
                <div>
                  {siteMetadata.social.twitter &&
                  <a href={siteMetadata.social.twitter}>
                    <FiTwitter/>
                  </a>
                  }
                </div>
                <div>
                  {siteMetadata.social.linkedin &&
                  <a href={siteMetadata.social.linkedin}>
                    <FiLinkedin/>
                  </a>
                  }
                </div>
                <div>
                  {siteMetadata.social.gitlab &&
                  <a href={siteMetadata.social.gitlab}>
                    <FiGitlab/>
                  </a>
                  }
                </div>
                <div>
                  {siteMetadata.social.instagram &&
                  <a href={siteMetadata.social.instagram}>
                    <FiInstagram/>
                  </a>
                  }
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Footer
