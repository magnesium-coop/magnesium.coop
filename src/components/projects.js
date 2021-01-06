import React from "react"
import Layout from "./layout"
import Slide from "./slide"
import Bio from "./bio"
import ArrowNext from "./arrowNext"
import ArrowPrev from "./arrowPrev"
import Element from "./element"

function removeSlash(text) {
  return text.replace(/\//g, "")
}

const ProjectsPage = (props) => {
  const slides = props.pages[props.pagePos].slides
  const anchor = props.pages[props.pagePos].anchor

  return (
    <Layout anchor={anchor} backgroundColor={props.currentPage.backgroundColor}>
      <Slide
        currentSlide={slides[0]}>
        <div className="h-full flex flex-wrap justify-around">
          <div className="w-full lg:mb-10 mt-0 items-center md:mt-auto flex  justify-around ">
            <div
              className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl text-" + slides[0].colors.titleColor}>{slides[0].title}.
            </div>
          </div>
          <div className="mt-0 mb-auto lg:w-1/2 grid lg:grid-cols-4 gap-8 flex">
          {slides.map((slide) => <Element element={slide.element}/>)}
          </div>
        </div>
      </Slide>
      {slides.map((slide, index) => {
        const author = slide.author
        if (index !== 0) {
          return (
            <div key={removeSlash(slide.slug)}>
              <Slide currentSlide={slide}>
                <div className="h-full flex flex-wrap justify-around lg:pt-32">
                  <div className="w-full lg:mb-10 mt-0 items-center md:mt-auto flex justify-around ">
                    <div
                      className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl text-" + slide.colors.titleColor}>[{slide.title}]
                      - {slide.name}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="mt-5 lg:mt-10 lg:text-base"
                         dangerouslySetInnerHTML={{ __html: slide.html }}/>
                    <span className={"font-mgblack " + slide.titleColor}>
                    Data
                  </span>
                    <div>
                      <ul>
                        <li> startdate: {slide.startdate}</li>
                        <li> duration: {slide.duration}</li>
                        <li> totalbudget: {slide.totalbudget}</li>
                        <li> client: {slide.client}</li>
                        <li> satisfactionletter: {slide.satisfactionletter}</li>
                        <li> technologies: {slide.technologies.map((tecno, index) => {
                          let tec = tecno.technology
                          return tec.name + " (" + tec.version + ")"
                        }).join(", ")}</li>
                        {/*<li> image: { slide.image }</li>*/}
                        <li> link: {slide.link}</li>
                        <li> managers: {slide.managers.map((data, index) => {
                          let man = data.manager.frontmatter
                          return man.name + " (" + man.email + ")"
                        }).join(", ")}</li>
                      </ul>
                    </div>
                    <div className="mb-64">
                      <Bio author={author}/>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          )
        }
      })}
      <ArrowNext arrow={props.currentSlide.next} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
      <ArrowPrev arrow={props.currentSlide.prev} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
    </Layout>
  )
}

export default ProjectsPage
