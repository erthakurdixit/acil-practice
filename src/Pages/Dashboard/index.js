import React from 'react'
import { GetCategories } from '../../Services/FetchData.services'

export default function Dashboard() {
  const Categories=()=>{
    GetCategories()
  .then((e)=>{console.log(e)})
  }

  return (
    
    <>
<h2>Dashboard</h2>
<button onClick={()=>{Categories()}}></button>

    </>
  )
}
