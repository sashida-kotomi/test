// import React from "react"

interface buttonProps {
  label:string;
}

export const Button1 = ({ label } : buttonProps) => {
  return(
    <button>{label}</button>
  )
}