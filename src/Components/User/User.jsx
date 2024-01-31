import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}= useParams() // it mrans it return an object . 
  return (
    <div>Hello : {userid}</div>
  )
}

export default User