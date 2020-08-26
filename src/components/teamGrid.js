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
  })

  if (team) {
    return (
      <div className="h-full flex flex-wrap items-center justify-around">
        <div className="w-full lg:w-1/5 h-16 mb-10 flex items-center justify-around">
          <div
            className={"font-mgblack text-2xl mg:text-3xl lg:text-4xl " + titleColor}>{title}.
          </div>
        </div>
        <div className="h-full md:h-auto w-11/12 md:w-4/5 lg:w-3/5 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
          {team.map((author) => (
            <div key={author.id}>
              <Image
                fluid={author.profilepicture.childImageSharp.fluid}
                alt={author.name}
                className="teamImage"
              />
              <div
                className={"pt-1 lg:pt-3 text-sm lg:text-lg text-right font-mgmedium " + titleColor}>{author.name}</div>
              <div className="text-xs lg:text-sm text-right">{author.bio}</div>
              <IconContext.Provider value={{ color: "white", className: "mx-1 text-xs lg:text-sm" }}>
                <div className="flex items-center justify-end">
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
          ))}
        </div>
      </div>
    )
  } else {
    return (null)
  }
}

export default TeamGrid
