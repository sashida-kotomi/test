// import React from "react"
import { Link } from 'react-router-dom'
import { Button1 } from './button1'

export const Button3 = () => {
  return(
    <Link to={'/'}>
    <Button1 label='戻る'/>
    </Link>
  )
}