// import React from "react"
import { Link } from 'react-router-dom'
import { Button1 } from './button1'


export const Button2 = () => {
  return(
    <Link to={'button3'}>
    <Button1 label='次へ'/>
    </Link>
  )
}