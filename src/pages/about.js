import React from "react"

import Layout from "../components/layout"
import Slide from "../components/slide"
import Bio from "../components/bio"

const AboutPage = (props) => {

  const slides = props.pages[props.pagePos].slides

  return (
    <Layout anchor={props.pages[props.pagePos].anchor}>
      <article>
        <Slide backgroundColor={slides[0].backgroundColor} textColor={slides[0].textColor}
               slideAnchor={slides[0].anchor}>
          <h2 className={slides[0].titleColor}>{slides[0].title}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: slides[0].html }}
          />
        </Slide>
        <Slide backgroundColor={slides[1].backgroundColor} textColor={slides[1].textColor}
               slideAnchor={slides[1].anchor}>
          <h1 className={slides[1].titleColor}>{slides[1].title}</h1>
          {slides[1].autores.map((author) => (
            <Bio author={author} key={author.id}/>
          ))}
        </Slide>

        <Slide backgroundColor={slides[2].backgroundColor} textColor={slides[2].textColor}
               slideAnchor={slides[2].anchor}>
          <h1 className={slides[2].titleColor}>{slides[2].title}</h1>
          {slides[2].autores.map((author) => (
            <Bio author={author} key={author.id}/>
          ))}
        </Slide>
      </article>
    </Layout>
  )
}

export default AboutPage