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


          <div className="flex justify-between">
            <div className={"self-center w-6/12"}>
              <div className={"text-5xl " + slide.textColor}
                   dangerouslySetInnerHTML={{
                     __html: slide.html
                   }}
              />
              <a href={"#" + props.pages[props.pagePos].anchor + "/" + props.pages[props.pagePos].slides[1].anchor}
                 className={"text-6xl " + slide.titleColor}
                 onClick={(e) => {
                   e.preventDefault()
                   props.fullPageApi.moveTo(props.pages[props.pagePos].anchor, props.pages[props.pagePos].slides[1].anchor)
                 }}>
                <span className={""}><IoIosArrowForward/></span>
              </a>
            </div>
            <div className="justify-end w-1/3">
              <img className="self-center w-full" src={tablaPeriodica} alt="Magnesium.coop logo"/>
            </div>
          </div>

        </Slide>
      </div>
    )
  }

  function getSlide(slide) {
    return (
      <div key={"slide-" + slide.order}>

        <Slide backgroundColor={slide.backgroundColor}
               textColor={slide.textColor}
               seoTitle={slide.title}
               seoDescription={slide.seoDescription}
               slideAnchor={slide.anchor}>

          <ArcherContainer
            strokeColor={theme.theme.extend.colors.naranja}
            offset="-23"
            svgContainerStyle={{ zIndex: 40 }}>


            <div className="flex justify-between">
              <ArcherElement
                id={"text-" + slide.order}
                relations={[{
                  targetId: "annotation-" + slide.order,
                  targetAnchor: (isOdd(slide.order) ? "top" : "left"),
                  sourceAnchor: (isOdd(slide.order) ? "right" : "right")
                }]}>
                <div className={"self-center mb-16 mt-16 w-8/12 font-mgblack annotation text-6xl " + slide.textColor}
                     dangerouslySetInnerHTML={{
                       __html: slide.html
                     }}
                />
              </ArcherElement>
              <ArcherElement
                id={"annotation-" + slide.order}>
                <div
                  className={"w-3/12 font-mgannotated text-naranja leading-tight text-center text-4xl " + (isOdd(slide.order) ? "self-end" : "self-start")}
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