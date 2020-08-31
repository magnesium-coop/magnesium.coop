import React, { useRef } from "react"
import { animated, useChain, useSpring } from "react-spring"
import MagnesiumTipografico from "./magnesiumTipografico"
import TablaPeriodica from "./tablaPeriodica"


const AnimatedIntro = ({ slides }) => {
  const gradientSpringRef = useRef()
  const gradientProps = useSpring({ config: { duration: 3000 }, x: 0, from: { x: 800 }, ref: gradientSpringRef })

  const tablaVisibleSpringRef = useRef()
  const tablaVisibleProps = useSpring({ height: "0", from: { height: "100%" }, ref: tablaVisibleSpringRef })

  const parrafoSpringRef = useRef()
  const parrafoProps = useSpring({
    config: { duration: 3000 },
    from: {
      opacity:0,
    },
    to: {opacity:1},
    ref: parrafoSpringRef })

  const letrasSpringRef = useRef()
  const letrasProps = useSpring({ config: { duration: 3000 }, opacity: 1, from: { opacity: 0 }, ref: letrasSpringRef })

  useChain([gradientSpringRef, tablaVisibleSpringRef, parrafoSpringRef, letrasSpringRef])

  return (
    <div className="h-screen my-auto flex flex-wrap items-center justify-around">
      <div className={"w-full lg:w-1/3"}>
        <TablaPeriodica animatedgradient={gradientProps} animatedvisible={tablaVisibleProps}/>
        <animated.div className={"text-lg md:text-2xl lg:text-4xl " + slides[0].textColor} style={parrafoProps}
                      dangerouslySetInnerHTML={{
                        __html: slides[0].html
                      }}
        />
       {/* {slides.map((slide, index) => (
          <div key={index} className={"text-lg md:text-4xl lg:text-5xl " + slide.textColor}
               dangerouslySetInnerHTML={{
                 __html: slide.html
               }}
          />))
        }*/}
      </div>
      <div className="w-full lg:w-1/3">
        <MagnesiumTipografico animatedprops={letrasProps}/>
      </div>
    </div>

  )

}

export default AnimatedIntro
