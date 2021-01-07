import React from "react"
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Element = ({ element, title, slug }) => {

  if (element) {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        //ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        //style={{ width: '200px', height: '200px'}} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: '#41669d',
          }}
        >
          <div className="bg-white">
            <svg version="1.1"
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
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#175852'}}>
          <div className="bg-negro">
            <a href={slug}>

              <svg version="1.1"
                   x="0px" y="0px"
                   viewBox="0 0 140 140">
                <g>
                  <path d="M139,1v138H1V1H139 M140,0H0v140h140V0L140,0z" stroke="black"/>
                </g>

                <text
                  className="element-name" fill="white"
                  x="12.564453"
                  y="78.947266">{title}
                </text>

              </svg>
            </a>
          </div>
        </BackSide>
      </Flippy>
    )
  } else {
    return <div></div>
  }
}

export default Element
