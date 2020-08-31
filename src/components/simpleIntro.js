import React, { useState } from "react"

import Layout from "./layout"
import Slide from "./slide"
import TablaPeriodica from "./tablaPeriodica"
import MagnesiumTipografico from "./magnesiumTipografico"
import { useSpring } from "react-spring"
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

  const [firstType, setFirstType] = useState(null)
  const [secondType, setSecondType] = useState(null)
  const [thirdType, setThirdType] = useState(null)
  const [fourthtType, setFourthType] = useState(null)
  const [fifthType, setFifthType] = useState(null)


  const firstSlide = props.pages[props.pagePos].slides[0]
  const secondSlide = props.pages[props.pagePos].slides[1]
  const thirdSlide = props.pages[props.pagePos].slides[2]
  const fouthSlide = props.pages[props.pagePos].slides[3]
  const fifithSlide = props.pages[props.pagePos].slides[4]


  return (
    <Layout anchor={props.pages[props.pagePos].anchor}>

      <Slide currentSlide={firstSlide}>
        <div className="h-screen flex flex-wrap items-center justify-between">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Desarrollamos y diseñamos software, aplicaciones y páginas web para solucionar problemas y mejorar procesos."
              ]}
              typeSpeed={40}
              typedRef={(typed) => {
                setFirstType(typed)
              }}
              stopped={false}
              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, secondSlide.anchor)
                secondType.start()
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + firstSlide.colors.textColor}></span>
            </Typed>
          </div>
          <div className="w-full lg:w-1/3">
            <TablaPeriodica animatedgradient={gradientProps} animatedvisible={visibleProps}/>
          </div>
        </div>
      </Slide>
      <Slide currentSlide={secondSlide}>
        <div className="h-full flex flex-wrap items-center justify-around">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Si no está claro cuál es el problema presentamos alternativas intentando evitar el retrabajo y sobrecostos."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                setSecondType(typed)
              }}
              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, thirdSlide.anchor)
                thirdType.start()
              }
              }
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + secondSlide.colors.textColor}></span>
            </Typed>
          </div>
          <div className="w-full lg:w-4/12">
            <MagnesiumTipografico animatedprops={letrasProps}/>
          </div>
        </div>
      </Slide>
      <Slide currentSlide={thirdSlide}>
        <div className="h-full flex flex-wrap items-center justify-around">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Usamos y producimos software libre porque promueve la colaboración, el aprendizaje, y la transparencia."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                setThirdType(typed)
              }}
              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, fouthSlide.anchor)
                fourthtType.start()
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + thirdSlide.colors.textColor}></span>
            </Typed>
          </div>
          <div className="w-full lg:w-4/12">
            <MagnesiumTipografico animatedprops={letrasProps}/>
          </div>
        </div>
      </Slide>
      <Slide currentSlide={fouthSlide}>
        <div className="h-full flex flex-wrap items-center justify-around">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Nos encantan los desafíos vinculados a la investigación científica o con fuerte impacto social."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                setFourthType(typed)
              }}

              onComplete={(self) => {
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, firstSlide.anchor);
                fifthType.start()
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + fouthSlide.colors.textColor}></span>
            </Typed>
          </div>
          <div className="w-full lg:w-4/12">
            <MagnesiumTipografico animatedprops={letrasProps}/>
          </div>
        </div>
      </Slide>
      <Slide currentSlide={fifithSlide}>
        <div className="h-full flex flex-wrap items-center justify-around">
          <div className={"w-full lg:w-6/12"}>
            <Typed
              strings={[
                "Sin reinventar la rueda implantamos y adaptamos herramientas abiertas para empresas y organizaciones."
              ]}
              typeSpeed={40}
              stopped={true}
              typedRef={(typed) => {
                setFifthType(typed)
              }}

              onComplete={(self) => {
                setFifthType(true)
                props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, firstSlide.anchor)
              }}
            >
              <span className={"text-lg md:text-4xl lg:text-5xl text-" + fifithSlide.colors.textColor}></span>
            </Typed>
          </div>
          <div className="w-full lg:w-4/12">
            <MagnesiumTipografico animatedprops={letrasProps}/>
          </div>
        </div>
      </Slide>
    </Layout>
  )
}

export default SimpleIntroPage