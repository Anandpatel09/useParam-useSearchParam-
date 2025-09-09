import React from 'react'
import { useParams } from 'react-router-dom'
const Language = () => {
    const data=useParams()
  return (
    <div>I Love {data.lang} Language</div>
  )
}

export default Language