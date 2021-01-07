import React from "react"
import Layout from "./layout"
import Slide from "./slide"
import Bio from "./bio"
import ArrowNext from "./arrowNext"
import ArrowPrev from "./arrowPrev"

function removeSlash(text) {
  return text.replace(/\//g, "")
}

const BlogPage = (props) => {
  const slides = props.pages[props.pagePos].slides
  const anchor = props.pages[props.pagePos].anchor


  return (
    <Layout anchor={anchor}>
      <Slide currentSlide={slides[0]}>
        <div className="h-full flex flex-wrap justify-around">
          <div className="w-full lg:mb-10 mt-0 items-center md:mt-auto flex  justify-around ">
            <div
              className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl text-" + slides[0].colors.titleColor}>{slides[0].title}.
            </div>
          </div>
          {slides.map((slide, index) => {
            if (index !== 0) {
              return (
                <article key={"#" + anchor + slide.slug}>
                  <header>
                    <h3>
                      <a href={"#" + anchor + "/" + removeSlash(slide.slug)} className={"text-" + slides[0].colors.textColor}>{slide.title}</a>
                    </h3>
                    <small>{slide.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: slide.description || slide.excerpt
                      }}
                    />
                  </section>
                </article>
              )
            } else return <div></div>
          })}
        </div>
      </Slide>
      {slides.map((slide, index) => {
        const author = slide.author
        if (index !== 0) {
          return (
            <div key={"blog_"+removeSlash(slide.slug)}>
              <Slide currentSlide={slide}>
                <div className="h-full flex flex-wrap justify-around lg:pt-32">
                  <div className="w-full lg:mb-10 mt-0 items-center md:mt-auto flex justify-around ">
                    <div
                      className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl text-" + slide.colors.titleColor}>{slide.title}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="mt-5 lg:mt-10 lg:text-base"
                         dangerouslySetInnerHTML={{ __html: slide.html }}/>
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

export default BlogPage