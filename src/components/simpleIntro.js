import React from "react"

import Layout from "./layout"
import Slide from "./slide"
import TablaPeriodica from "./tablaPeriodica"
import { animated, useSpring } from "react-spring"
import Typed from "react-typed"
import "react-typed/dist/animatedCursor.css"

const SimpleIntroPage = (props) => {

  const gradientProps = useSpring({ config: { duration: 3000 }, x: 100, from: { x: 800 } })
  const visibleProps = useSpring({ config: { duration: 3000 }, x: 100, color: "tranparent" })
  const letrasProps = useSpring({ config: { duration: 3000 }, opacity: 1, from: { opacity: 0 } })
  const pulseProps = useSpring({
    config: { friction: 0.5, mass: 5, tension: 100 },
    transform: "scale(1.1)",
    from: { transform: "scale(0.9)" }
  })


  const firstSlide = props.pages[props.pagePos].slides[0]
  const secondSlide = props.pages[props.pagePos].slides[1]
  const thirdSlide = props.pages[props.pagePos].slides[2]
  const fouthSlide = props.pages[props.pagePos].slides[3]
  const fifithSlide = props.pages[props.pagePos].slides[4]


  return (
    <Layout anchor={props.pages[props.pagePos].anchor}>

      <Slide currentSlide={firstSlide}>
        <TablaPeriodica animatedgradient={gradientProps} animatedvisible={visibleProps}/>

        <div className="flex flex-wrap z-40 h-full lg:items-center">
          <div className={"w-full lg:w-6/12 mt-20"} style={{ zIndex: "inherit" }}>
            <Typed
              strings={[
                "Desarrollamos y diseñamos software, aplicaciones y páginas web para solucionar problemas y mejorar procesos.",
                "Si no está claro cuál es el problema presentamos alternativas intentando evitar el retrabajo y sobrecostos.",
                "Usamos y producimos software libre porque promueve la colaboración, el aprendizaje, y la transparencia.",
                "Nos encantan los desafíos vinculados a la investigación científica o con fuerte impacto social.",
                "Sin reinventar la rueda implantamos y adaptamos herramientas abiertas para empresas y organizaciones."
              ]}
              typeSpeed={50}
              backSpeed={5}
              typedRef={(typed) => {
                props.saveTypingTexts(firstSlide.anchor, typed)
              }}
              stopped={false}
              onComplete={(self) => {
                //props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, secondSlide.anchor)
              }}
            >
              <span className={"z-40 text-lg md:text-4xl lg:text-5xl text-" + firstSlide.colors.textColor}></span>
            </Typed>

          </div>

        </div>
        <div className="-mx-10 w-full absolute">
          <div className="w-full flex justify-around">
            <a className={"text-5xl md:text-5xl lg:text-6xl text-naranja"}
               onClick={(e) => {
                 e.preventDefault()
                 props.fullPageApi.moveTo(props.pages[props.pagePos + 1].anchor, props.pages[props.pagePos + 1].slides[0])
               }}>
              <span className="mx-auto">
                <animated.svg style={pulseProps} stroke="currentColor" fill="currentColor" stroke-width="0"
                              viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                  d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></animated.svg>
              </span>
            </a>
          </div>
        </div>

      </Slide>
      {/* <Slide currentSlide={secondSlide}>
        <div className="absolute">
          <MagnesiumTipografico animatedprops={letrasProps}/>
        </div>
        <div className="h-full flex flex-wrap lg:items-center">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Si no está claro cuál es el problema presentamos alternativas intentando evitar el retrabajo y sobrecostos."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                props.saveTypingTexts(secondSlide.anchor, typed)
              }}
              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, thirdSlide.anchor)
              }
              }
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + secondSlide.colors.textColor}></span>
            </Typed>
          </div>

        </div>
      </Slide>
      <Slide currentSlide={thirdSlide}>
        <div className="absolute">
          <MagnesiumTipografico animatedprops={letrasProps}/>
        </div>
        <div className="h-full flex flex-wrap lg:items-center">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Usamos y producimos software libre porque promueve la colaboración, el aprendizaje, y la transparencia."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                props.saveTypingTexts(thirdSlide.anchor, typed)
              }}
              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, fouthSlide.anchor)
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + thirdSlide.colors.textColor}></span>
            </Typed>
          </div>

        </div>
      </Slide>
      <Slide currentSlide={fouthSlide}>
        <div className="absolute">
          <MagnesiumTipografico animatedprops={letrasProps}/>
        </div>
        <div className="h-full flex flex-wrap lg:items-center">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Nos encantan los desafíos vinculados a la investigación científica o con fuerte impacto social."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                props.saveTypingTexts(fouthSlide.anchor, typed)
              }}

              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, firstSlide.anchor)
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + fouthSlide.colors.textColor}></span>
            </Typed>
          </div>

        </div>
      </Slide>
      <Slide currentSlide={fifithSlide}>
        <div className="absolute">
          <MagnesiumTipografico animatedprops={letrasProps}/>
        </div>
        <div className="h-full flex flex-wrap lg:items-center">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Sin reinventar la rueda implantamos y adaptamos herramientas abiertas para empresas y organizaciones."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                props.saveTypingTexts(fifithSlide.anchor, typed)
              }}

              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, firstSlide.anchor)
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + fifithSlide.colors.textColor}></span>
            </Typed>
          </div>

        </div>
      </Slide>*/}
    </Layout>
  )
}

export default SimpleIntroPage