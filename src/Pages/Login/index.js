import React from 'react'
import { GetCategories } from '../../Services/FetchData.services'

export default function Login() {
// const categories=()=>{
//   GetCategories()
// }

  return (
    <>
    <h2>Login</h2>
    <button onClick={()=>{GetCategories()}} >Get Categories</button>
    </>
  )
}
