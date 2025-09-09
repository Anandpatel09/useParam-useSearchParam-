import React from 'react'

import { useParams } from 'react-router-dom'
const About = () => {
    const {id,num}=useParams()
  return (
    <div>About ytwhr tyh  reyj ety jtyj tyj ty j etj etuj tyj

        <h1>{id}</h1>
        <h2>{num}</h2>
    </div>

  )
}

export default About