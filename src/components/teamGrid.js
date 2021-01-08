import React, { useEffect, useState } from "react"
import { FiGitlab, FiTwitter } from "react-icons/fi"
import { FaRegEnvelope } from "react-icons/fa"
import { IconContext } from "react-icons"
import Image from "gatsby-image/index"

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

const TeamGrid = ({ team, title, titleColor }) => {

  const [teamList, setTeamList] = useState(null)

  useEffect(() => {
    if (team && (teamList === null)) {
      shuffleArray(team)
      setTeamList(team)
    }
  }, [team, teamList])

  if (team) {
    return (
      <div className="h-full flex flex-wrap justify-center lg:items-center">
        <div className="w-full md:1/6 lg:w-1/5 mb-5 md:mb-10 mt-0 lg:h-auto lg:my-auto flex items-center justify-around">
          <div
            className={"font-mgblack text-2xl md:text-2xl lg:text-3xl " + titleColor}>{title}.
          </div>
        </div>
        <div className="mt-0 lg:mt-auto mb-auto w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12 grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          {team.map(({node}) => {
            let author = node.frontmatter
            return (
              <div key={"autor_"+author.id}>
                <Image
                  fluid={author.profilepicture.childImageSharp.fluid}
                  alt={author.name}
                  className="teamImage"
                />
                <div
                  className={"pt-1 lg:pt-3 text-xs xl:text-base text-center md:text-right font-mgmedium " + titleColor}>{author.name}</div>
                <div className="hidden xl:block text-sm lg:text-sm text-right text-blanco">{author.bio}</div>
                <IconContext.Provider value={{ color: "white", className: "mt-1 mx-1 text-xs lg:text-sm" }}>
                  <div className="flex items-center justify-center md:justify-end">
                    <div>
                      <a href={"mailto:" + author.email} className={"no-underline text-white "}>
                        <FaRegEnvelope/>
                      </a>
                    </div>
                    <div>
                      {author.twitter &&
                      <a href={author.twitter}>
                        <FiTwitter/>
                      </a>
                      }
                    </div>
                    <div>
                      {author.gitlab &&
                      <a href={author.gitlab}>
                        <FiGitlab/>
                      </a>
                      }
                    </div>
                  </div>
                </IconContext.Provider>

              </div>
            )
          })}
        </div>
        <div className="invisible lg:visible lg:w-1/5"></div>
      </div>
    )
  } else {
    return (null)
  }
}

export default TeamGrid
