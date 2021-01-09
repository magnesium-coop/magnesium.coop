import React from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaWhatsapp } from "react-icons/all"
import { FaRegEnvelope } from "react-icons/fa"
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi"

const SocialShare = ({slug, color, title}) => {

  const url = 'https://magnesium.coop/'+ slug
  console.log(url)

  return (
    <div className={"mt-5 flex justify-between w-1/2 md:w-1/3 xl:w-1/4 mx-auto text-"+color}>
      <EmailShareButton url={url} subject={title}><FaRegEnvelope/></EmailShareButton>
      <LinkedinShareButton url={url} title={title} source={'https://magnesium.coop'}><FiLinkedin/></LinkedinShareButton>
      <FacebookShareButton url={url} quoute={title}><FiFacebook/></FacebookShareButton>
      <TwitterShareButton url={url} title={title} via={"magnesiumcoop"} related={['raulsperoni','pablolivera','goja288','cbauza88','mberguer_','tinchosteglich']}><FiTwitter/></TwitterShareButton>
      <WhatsappShareButton url={url} title={title}><FaWhatsapp/></WhatsappShareButton>
    </div>
  )


}

export default SocialShare
