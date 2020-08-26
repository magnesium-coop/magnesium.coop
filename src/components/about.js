import React from "react"

import Layout from "./layout"
import Slide from "./slide"
import Bio from "./bio"
import ArrowNext from "./arrowNext"
import ArrowPrev from "./arrowPrev"
import TeamGrid from "./teamGrid"

const AboutPage = (props) => {

  const slides = props.pages[props.pagePos].slides
  return (
    <Layout anchor={props.pages[props.pagePos].anchor} backgroundColor={props.currentSlide.backgroundColor}>
      <Slide backgroundColor={slides[0].backgroundColor}
             textColor={slides[0].textColor}
             slideAnchor={slides[0].anchor}
             nextSlide={slides[1]}>
        <div className="h-full flex flex-wrap items-center justify-around">
          <div className="w-full h-16 mb-10 mt-auto flex items-center justify-around ">
            <div
              className={" font-mgblack text-2xl mg:text-3xl lg:text-4xl " + slides[0].titleColor}>{slides[0].title}.
            </div>
          </div>

            <div
              className="mb-auto lg:w-1/2 lg:px-10 text-justify lg:text-base"
              dangerouslySetInnerHTML={{ __html: slides[0].html }}
            />
          </div>
      </Slide>
      <Slide backgroundColor={slides[1].backgroundColor}
             textColor={slides[1].textColor}
             slideAnchor={slides[1].anchor}
             prevSlide={slides[0]}
             nextSlide={slides[2]}>
        <TeamGrid titleColor={slides[1].titleColor} title={slides[1].title} team={slides[1].autores}/>
      </Slide>

      <Slide backgroundColor={slides[2].backgroundColor}
             textColor={slides[2].textColor}
             slideAnchor={slides[2].anchor}
             prevSlide={slides[1]}>
        <TeamGrid titleColor={slides[2].titleColor} title={slides[2].title} team={slides[2].autores}/>

      </Slide>

      <ArrowNext arrow={props.currentSlide.next} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
      <ArrowPrev arrow={props.currentSlide.prev} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
    </Layout>
  )
}

export default AboutPage