import React  from "react"

const Element = ({ element }) => {

  if (element) {
    return (
      <div className="flip-card font-mgbook absolute h-100">
        <div className="flip-card-inner h-16">
          <div className="flip-card-front">
            <div className="bg-white">
            <svg version="1.1" id="Capa_1"
                 x="0px" y="0px"
                 viewBox="0 0 140 140">
              <g>
                <path d="M139,1v138H1V1H139 M140,0H0v140h140V0L140,0z" stroke="black"/>
              </g>
              <text transform="matrix(1 0 0 1 10.4826 103.8005)" fill="black"
                    className="element-name">{element.id}</text>
              <text transform="matrix(1 0 0 1 114.2534 23.3004)" fill="black"
                    className="text-sm">{element.number}</text>
              <text transform="matrix(1 0 0 1 10.0769 126.8999)" fill="black"
                    className="text-sm">{element.ionizationEnergy}</text>
              <text transform="matrix(1 0 0 1 104.2527 126.8997)" fill="black"
                    className="text-sm">{element.electronNegativity}</text>
              <text transform="matrix(1 0 0 1 10.4824 23.3004)" fill="black" className="st6 st7">{element.mass}</text>
              <text transform="matrix(1 0 0 1 8.365 77.8001)" fill="black"
                    className="font-mgblack element-symbol">{element.symbol}</text>
            </svg>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="bg-negro">
              <svg version="1.1" id="Capa_1"
                   x="0px" y="0px"
                   viewBox="0 0 140 140">
                <g>
                  <path d="M139,1v138H1V1H139 M140,0H0v140h140V0L140,0z" stroke="black"/>
                </g>
                <text
                  className="element-name" fill="white"
                  id="text998"
                  x="12.564453"
                  y="78.947266">Tantalum
                </text>
              </svg>
          </div>
        </div>
      </div>
      </div>
    )
  } else {
    return null
  }
}

export default Element
