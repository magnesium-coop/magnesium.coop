import React from "react"
import { ArcherContainer, ArcherElement } from "react-archer"
import theme from "../../tailwind.config"

import Layout from "./layout"
import Slide from "./slide"
import tablaPeriodica from "../../content/assets/tabla-periodica-01.svg"
import { IoIosArrowForward } from "react-icons/io"

const IntroPage = (props) => {

  function isOdd(num) {
    return num % 2
  }

  function getFirstSlide(slide) {
    return (
      <div key={"slide-" + slide.order}>

        <Slide backgroundColor={slide.backgroundColor}
               textColor={slide.textColor}
               seoTitle={slide.title}
               seoDescription={slide.seoDescription}
               slideAnchor={slide.anchor}>
          <div className="flex flex-wrap justify-between">
            <div className={"self-center w-full lg:w-6/12"}>
              <div className={"text-3xl md:text-4xl lg:text-5xl " + slide.textColor}
                   dangerouslySetInnerHTML={{
                     __html: slide.html
                   }}
              />
              <a href={"#" + props.pages[props.pagePos].anchor + "/" + props.pages[props.pagePos].slides[1].anchor}
                 className={"text-4xl md:text-5xl lg:text-6xl " + slide.titleColor}
                 onClick={(e) => {
                   e.preventDefault()
                   props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, props.pages[props.pagePos].slides[1].anchor)
                 }}>
                <span className={""}><IoIosArrowForward/></span>
              </a>
            </div>
            <div className="justify-end w-full lg:w-1/3">
              <img className="self-center w-full" src={tablaPeriodica} alt="Magnesium.coop logo"/>
            </div>
          </div>
        </Slide>
      </div>
    )
  }

  function getSlide(slide) {
    return (
      <div key={"h-screen slide-" + slide.order}>

        <Slide backgroundColor={slide.backgroundColor}
               textColor={slide.textColor}
               seoTitle={slide.title}
               seoDescription={slide.seoDescription}
               slideAnchor={slide.anchor}>

          <ArcherContainer
            strokeColor={theme.theme.extend.colors.naranja}
            offset="-23"
            svgContainerStyle={{ zIndex: 40 }}>


            <div className="flex flex-wrap justify-between">
              <ArcherElement
                id={"text-" + slide.order}
                relations={[{
                  targetId: "annotation-" + slide.order,
                  targetAnchor: (isOdd(slide.order) ? "top" : "left"),
                  sourceAnchor: (isOdd(slide.order) ? "right" : "right")
                }]}>
                <div className={"mb-16 mt-16 w-full lg:w-8/12 font-mgblack annotation text-4xl md:text-5xl lg:text-6xl " + slide.textColor}
                     dangerouslySetInnerHTML={{
                       __html: slide.html
                     }}
                />
              </ArcherElement>
              <ArcherElement
                id={"annotation-" + slide.order}>
                <div
                  className={"w-full lg:w-3/12 font-mgannotated text-naranja leading-tight text-center text-2xl md:text-3xl lg:text-4xl " + (isOdd(slide.order) ? "self-end" : "self-start")}
                  dangerouslySetInnerHTML={{ __html: slide.annotation }}/>
              </ArcherElement>
            </div>

          </ArcherContainer>
        </Slide>
      </div>
    )
  }

  return (
    <Layout anchor={props.pages[props.pagePos].anchor} backgroundColor={props.currentPage.backgroundColor}>
      <article>
        {props.pages[props.pagePos].slides.map((slide) => {
          if (slide.order === 0) {
            return getFirstSlide(slide)
          } else {
            return getSlide(slide)
          }
        })}
      </article>
    </Layout>
  )
}

export default IntroPage