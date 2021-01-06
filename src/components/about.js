import React from "react"

import Layout from "./layout"
import Slide from "./slide"
import ArrowNext from "./arrowNext"
import ArrowPrev from "./arrowPrev"
import TeamGrid from "./teamGrid"

const AboutPage = (props) => {

  const slides = props.pages[props.pagePos].slides
  return (
    <Layout anchor={props.pages[props.pagePos].anchor}>
      <Slide currentSlide={slides[0]}>
        <div className="h-full flex flex-wrap justify-around">
          <div className="w-full lg:mb-10 mt-0 items-center md:mt-auto flex justify-around ">
            <div
              className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl text-" + slides[0].colors.titleColor}>{slides[0].title}.
            </div>
          </div>

            <div
              className="mt-0 mb-auto lg:w-1/2 lg:px-10 lg:text-base"
              dangerouslySetInnerHTML={{ __html: slides[0].html }}
            />
          </div>
      </Slide>
      <Slide currentSlide={slides[1]}>
        <TeamGrid titleColor={"text-"+slides[1].colors.titleColor} title={slides[1].title} team={slides[1].autores}/>
      </Slide>

      <Slide currentSlide={slides[2]}>
        <TeamGrid titleColor={"text-"+slides[2].colors.titleColor} title={slides[2].title} team={slides[2].autores}/>
      </Slide>

      <ArrowNext arrow={props.currentSlide.next} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
      <ArrowPrev arrow={props.currentSlide.prev} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
    </Layout>
  )
}

export default AboutPage