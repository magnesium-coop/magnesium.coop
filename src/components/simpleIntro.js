import React, { useRef, useState } from "react"

import Layout from "./layout"
import Slide from "./slide"
import TablaPeriodica from "./tablaPeriodica"
import { animated, useSpring } from "react-spring"
import Typed from "react-typed"
import "react-typed/dist/animatedCursor.css"

const SimpleIntroPage = (props) => {

  const pulseProps = useSpring({
    config: { friction: 0.5, mass: 5, tension: 100 },
    transform: "scale(1.1)",
    from: { transform: "scale(0.9)" }
  })


  const firstSlide = props.pages[props.pagePos].slides[0]

  const mgCoords = { x: 227.1665, y: 372.9024 }
  const [coords, setCoords] = useState(mgCoords)
  const svgRef = useRef(null)
  return (
    <Layout anchor={props.pages[props.pagePos].anchor}>

      <Slide currentSlide={firstSlide}>
        <div className="h-full w-full"
             onMouseMove={event => {
               const rect = svgRef.current.getBoundingClientRect()
               setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top })
             }}
             onMouseLeave={event => {
               setCoords(mgCoords)
             }}>
          <TablaPeriodica mouseCoords={coords} reference={svgRef}/>
          <div className="h-full flex flex-col z-40 items-center justify-around">
            <div className={"w-full h-full flex lg:w-6/12 mt-20 lg:mt-56"} style={{ zIndex: "inherit" }}>
              <Typed
                className={"z-40 h-1/2 text-lg md:text-4xl lg:text-5xl text-" + firstSlide.colors.textColor}
                strings={[
                  "Desarrollamos y diseñamos software, aplicaciones y páginas web para solucionar problemas y mejorar procesos.",
                  "Si no está claro cuál es el problema presentamos alternativas intentando evitar el retrabajo y sobrecostos.",
                  "Usamos y producimos software libre porque promueve la colaboración, el aprendizaje, y la transparencia.",
                  "Nos encantan los desafíos vinculados a la investigación científica o con fuerte impacto social.",
                  "Sin reinventar la rueda implantamos y adaptamos herramientas abiertas para empresas y organizaciones."
                ]}
                typeSpeed={50}
                //backSpeed={5}
                //backDelay={700}
                fadeOut={true}
                fadeOutDelay={500}
                stopped={false}
              >
                <span></span>
              </Typed>
            </div>
            <div className="w-full flex justify-around ">
              <a className={"self-end text-5xl md:text-5xl lg:text-6xl text-naranja"}
                 onClick={(e) => {
                   e.preventDefault()
                   props.fullPageApi.moveTo("nosotros", 0)
                 }}>
              <span className="mx-auto">
                <animated.svg style={pulseProps} stroke="currentColor" fill="currentColor" stroke-width="0"
                              viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                  d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></animated.svg>
              </span>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </Layout>
  )
}

export default SimpleIntroPage