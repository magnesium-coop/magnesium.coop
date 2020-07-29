import React from "react"

import Layout from "./layout"
import Slide from "./slide"
import Bio from "./bio"
import ArrowNext from "./arrowNext"
import ArrowPrev from "./arrowPrev"

const AboutPage = (props) => {

  const slides = props.pages[props.pagePos].slides
  return (
    <Layout anchor={props.pages[props.pagePos].anchor} backgroundColor={props.currentPage.backgroundColor}>
      <Slide backgroundColor={slides[0].backgroundColor}
             textColor={slides[0].textColor}
             slideAnchor={slides[0].anchor}
             nextSlide={slides[1]}>
        <div className="flex">
          <div className="w-0 md:w-1/6 lg:w-1/3"/>
          <div>
            <div className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl "+slides[0].titleColor}>{slides[0].title}</div>
            <div
              className="text-justify text-lg md:text-xl lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: slides[0].html }}
            />
          </div>
          <div className="w-0 md:w-1/6 lg:w-1/3"/>

        </div>

      </Slide>
      <Slide backgroundColor={slides[1].backgroundColor}
             textColor={slides[1].textColor}
             slideAnchor={slides[1].anchor}
             prevSlide={slides[0]}
             nextSlide={slides[2]}>
        <div className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl "+slides[1].titleColor}>{slides[1].title}</div>
        {slides[1].autores.map((author) => (
          <Bio author={author} key={author.id}/>
        ))}
      </Slide>

      <Slide backgroundColor={slides[2].backgroundColor}
             textColor={slides[2].textColor}
             slideAnchor={slides[2].anchor}
             prevSlide={slides[1]}>
        <div className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl "+slides[2].titleColor}>{slides[2].title}</div>
        {slides[2].autores.map((author) => (
          <Bio author={author} key={author.id}/>
        ))}
      </Slide>

      <ArrowNext arrow={props.currentPage.next} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
      <ArrowPrev arrow={props.currentPage.prev} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
    </Layout>
  )
}

export default AboutPage