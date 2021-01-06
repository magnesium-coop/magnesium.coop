import React from "react"

const Element = ({ element }) => {
  if (element) {
    return (

      <svg version="1.1" id="Capa_1"
           x="0px" y="0px"
           viewBox="0 0 140 140" >

        <g>


          <path className="st0" d="M139,1v138H1V1H139 M140,0H0v140h140V0L140,0z"/>
</g>
        <text transform="matrix(1 0 0 1 10.4826 103.8005)" className="st1 st2 st3">{element.id}</text>
        <text transform="matrix(1 0 0 1 96.2534 36.6001)" className="st1 st4 st3">{element.number}</text>
        <text transform="matrix(1 0 0 1 10.0769 126.8999)" className="st1 st5">{element.ionizationEnergy}</text>
        <text transform="matrix(1 0 0 1 104.2527 126.8997)" className="st1 st5">{element.electronNegativity}</text>
        <text transform="matrix(1 0 0 1 10.4824 23.3004)" className="st6 st7">{element.mass}</text>
        <text transform="matrix(1 0 0 1 8.365 77.8001)" className="st6 st8 st9">{element.symbol}</text>
</svg>


    )
  } else {
    return null
  }
}

export default Element
