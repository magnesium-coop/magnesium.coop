import React from "react"
import Layout from "./layout"
import Slide from "./slide"
import Bio from "./bio"

function removeSlash(text) {
  return text.replace(/\//g, "")
}

const BlogPage = (props) => {
  const slides = props.pages[props.pagePos].slides
  const anchor = props.pages[props.pagePos].anchor


  return (
    <Layout anchor={anchor} backgroundColor={props.currentPage.backgroundColor}>
      <Slide
        backgroundColor={slides[0].backgroundColor}
        textColor={slides[0].textColor}>
        <h1 className={slides[0].titleColor}>{slides[0].title}</h1>
        {slides.map((slide, index) => {
          if (index !== 0) {
            return (
              <article key={"#" + anchor + slide.slug}>
                <header>
                  <h3>
                    <a href={"#" + anchor + slide.slug} className={slides[0].textColor}
                       onClick={() => props.fullPageApi.moveTo(anchor, removeSlash(slide.slug))}>{slide.title}</a>
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
          }
        })}
      </Slide>
      {slides.map((slide, index) => {
        const author = slide.author
        if (index !== 0) {
          return (
            <div key={removeSlash(slide.slug)}>
              <Slide
                backgroundColor={slide.backgroundColor}
                textColor={slide.textColor}
                titleColor={slide.titleColor}
                slideAnchor={removeSlash(slide.slug)}
                seoTitle={slide.title}
                seoDescription={slide.description}>
                <div className="h-full pt-10 lg:pt-48 lg:pb-48 flex items-center justify-around">
                  <div className="h-full lg:w-1/2 lg:px-10">
                  <header>
                    <h1 className={"font-mgblack " + slide.titleColor}>
                      {slide.title}
                    </h1>
                    <p
                      style={{
                        display: `block`
                      }}
                    >
                      {slide.date}
                    </p>
                  </header>
                  <section dangerouslySetInnerHTML={{ __html: slide.html }}/>

                  <footer className="mb-64">
                    <Bio author={author}/>
                  </footer>
                  </div>
                </div>
              </Slide>
            </div>
          )
        }
      })}
    </Layout>
  )
}

export default BlogPage