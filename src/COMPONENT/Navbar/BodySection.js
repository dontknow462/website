import React from 'react'
import "./BodySection.css"
// import { Link } from 'react-router-dom';


function BodySection() {
  return (
    <div className="main">
      <div className="content">

        <h1 className="pri">
          Hi, my name is <span></span>
        </h1>


        <h1 className="seg">
          Roshan.<span></span>
        </h1>
        <h1 className="ter">
          I like to build cool websites.<span></span>
        </h1>
      </div>

      <div>
        <a href="#" className="btn">Portifolio</a>
      </div>

    </div>
  )
}

export default BodySection
