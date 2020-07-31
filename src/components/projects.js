import React from "react"
import Layout from "./layout"
import Slide from "./slide"
import Bio from "./bio"

function removeSlash(text) {
  return text.replace(/\//g, "")
}

const ProjectsPage = (props) => {
  const slides = props.pages[props.pagePos].slides
  const anchor = props.pages[props.pagePos].anchor

  // console.log("slides", slides )

  return (
    <Layout anchor={anchor} backgroundColor={props.currentPage.backgroundColor}>
      <Slide
        backgroundColor={slides[0].backgroundColor}
        textColor={slides[0].textColor}>
        <h1 className={slides[0].titleColor}>
          {slides[0].title}
        </h1>
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
                <article>
                  <header>
                    <h1 className={"font-mgblack " + slide.titleColor}>
                      [{slide.title}] - {slide.name}
                    </h1>
                    <p
                      style={{
                        display: `block`
                      }}
                    >
                      {slide.date}
                    </p>
                  </header>

                  <span className={"font-mgblack " + slide.titleColor}>
                    Description
                  </span>
                  <section dangerouslySetInnerHTML={{ __html: slide.html }}/>

                  <span className={"font-mgblack " + slide.titleColor}>
                    Data
                  </span>
                  <section>
                    <ul>

                    <li> startdate: { slide.startdate }</li>
                    <li> duration: { slide.duration }</li>
                    <li> totalbudget: { slide.totalbudget }</li>
                    <li> client: { slide.client }</li>
                    <li> satisfactionletter: { slide.satisfactionletter }</li>
                    <li> technologies: { slide.technologies.map((tecno, index) => {
                      let tec = tecno.technology;
                      return tec.name + " (" + tec.version + ")"
                    }).join(", ") }</li>
                    {/*<li> image: { slide.image }</li>*/}
                    <li> link: { slide.link }</li>
                    <li> managers: { slide.managers .map((mana, index) => {
                      let man = mana.manager;
                      return man.name + " (" + man.email + ")"
                    }).join(", ") }</li>
                    </ul>
                  </section>
                  <footer>
                    <Bio author={author}/>
                  </footer>
                </article>
              </Slide>
            </div>
          )
        }
      })}
    </Layout>
  )
}

export default ProjectsPage;
