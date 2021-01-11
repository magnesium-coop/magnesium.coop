import React from "react"
import Layout from "./layout"
import Slide from "./slide"
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
      <Slide currentSlide={slides[0]}>
        <div className="h-full flex flex-wrap justify-center lg:items-center">
          <div
            className="w-full md:1/6 lg:w-1/5 mb-5 md:mb-10 mt-0 lg:h-auto lg:my-auto flex items-center justify-around">
            <div
              className={"font-mgblack text-2xl md:text-2xl lg:text-3xl text-" + slides[0].colors.titleColor}>{slides[0].title}.
            </div>
          </div>
          <div
            className="mt-0 lg:mt-auto mb-auto w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12 grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
            {slides.filter((value, index) => index > 0 && index < 7).map((slide) =>
              <div key={"elm_" + anchor + "__" + removeSlash(slide.slug)}><Element element={slide.element}
                                                                                   title={slide.name}
                                                                                   slug={"#" + anchor + "/" + removeSlash(slide.slug)}/>
              </div>)}
          </div>
          <div className="invisible lg:visible lg:w-1/5"></div>
        </div>
      </Slide>
      {slides.map((slide, index) => {
        if (index !== 0) {
          return (
            <div key={"proyectos_page" + index}>
              <Slide currentSlide={slide}>
                <div className="h-full flex flex-wrap justify-around lg:pt-32">
                  <div className="mt-0 mb-auto w-11/12 sm:w-7/12 md:w-8/12 lg:w-8/12 xl:w-6/12 lg:px-10 lg:text-base">
                    <div className="w-full lg:mb-10 mt-0 items-center md:mt-auto flex ">
                    <div className="bg-negro w-1/4 lg:w-1/6 xl:w-1/7">
                      <svg version="1.1"
                           x="0px" y="0px"
                           viewBox="0 0 140 140">
                        <g>
                          <path d="M139,1v138H1V1H139 M140,0H0v140h140V0L140,0z" stroke="white"/>
                        </g>
                        <text transform="matrix(1 0 0 1 10.4826 103.8005)" fill="white"
                              className="element-name">{slide.element.id}</text>
                        <text transform="matrix(1 0 0 1 114.2534 23.3004)" fill="white"
                              className="text-sm">{slide.element.number}</text>
                        <text transform="matrix(1 0 0 1 10.0769 126.8999)" fill="white"
                              className="text-sm">{slide.element.ionizationEnergy}</text>
                        <text transform="matrix(1 0 0 1 104.2527 126.8997)" fill="white"
                              className="text-sm">{slide.element.electronNegativity}</text>
                        <text transform="matrix(1 0 0 1 10.4824 23.3004)" fill="white" className="st6 st7">{slide.element.mass}</text>
                        <text transform="matrix(1 0 0 1 8.365 77.8001)" fill="white"
                              className="font-mgblack element-symbol">{slide.element.symbol}</text>
                      </svg>
                    </div>
                    <div
                      className={"ml-5 font-mgblack text-2xl mg:text-3xl lg:text-4xl text-" + slide.colors.titleColor}>{slide.name}
                    </div>

                    </div>
                    <div className="mt-5 proyecto-body xl:text-lg font-mgbook"
                         dangerouslySetInnerHTML={{ __html: slide.html }}/>
                    <span className={"font-mgblack " + slide.titleColor}>
                  </span>
                    <table className="mt-5 table-auto text-sm md:text-base md:table-fixed p-5 w-full">
                      <thead>
                      <tr>
                        <th className="w-1/2"></th>
                        <th className="w-1/2"></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className="border">
                        <td className="border py-1 md:py-2 px-3 md:px-5">Comienzo</td>
                        <td className="border py-1 md:py-2 px-3 md:px-5">{slide.startdate}</td>
                      </tr>
                      <tr className="border">
                        <td className="border py-1 md:py-2 px-3 md:px-5">Duración</td>
                        <td className="border py-1 md:py-2 px-3 md:px-5">{slide.duration}</td>
                      </tr>
                    {/*  <tr className="border">
                        <td className="border py-1 md:py-2 px-3 md:px-5">Presupuesto</td>
                        <td className="border py-1 md:py-2 px-3 md:px-5">{slide.totalbudget}</td>
                      </tr>*/}
                      <tr className="border">
                        <td className="border py-1 md:py-2 px-3 md:px-5">Cliente</td>
                        <td className="border py-1 md:py-2 px-3 md:px-5">{slide.client}</td>
                      </tr>
                      <tr className="border">
                        <td className="border py-1 md:py-2 px-3 md:px-5">Tecnologías</td>
                        <td className="border py-1 md:py-2 px-3 md:px-5">{slide.technologies.map((tecno, index) => {
                          let tec = tecno.technology
                          return tec.name + " (" + tec.version + ")"
                        }).join(", ")}</td>
                      </tr>
                      <tr className="border">
                        <td className="border py-1 md:py-2 px-3 md:px-3">Link</td>
                        <td className="border py-1 md:py-2 px-3 md:px-3"><a className="no-underline text-blanco" href={slide.link} target={"_blank"}>{slide.link}</a></td>
                      </tr>
                   {/*   {slide.managers.map((data, index) => {
                        let man = data.manager.frontmatter
                        return (
                          <tr className="border">
                            <td className="border py-1 md:py-2 px-3 md:px-3 md:px-5">Responsable</td>
                            <td className="border py-1 md:py-2 px-3 md:px-3 md:px-5"><a className="no-underline text-blanco"
                                                                href={"mailto:" + man.email} target="_blank">{man.name}</a>
                            </td>
                          </tr>
                        )
                      })}*/}


                      </tbody>
                    </table>
                  </div>
                </div>
              </Slide>
            </div>
          )
        } else return <div key={"proyectos_page" + index}></div>
      })}
      <ArrowNext arrow={props.currentSlide.next} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
      <ArrowPrev arrow={props.currentSlide.prev} fullPageApi={props.fullPageApi}
                 anchor={props.pages[props.pagePos].anchor}/>
    </Layout>
  )
}

export default ProjectsPage
