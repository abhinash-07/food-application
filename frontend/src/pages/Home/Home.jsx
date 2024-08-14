import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Food_display from '../../components/Food_display/Food_display'
import MobileApp from '../../components/MobileApp/MobileApp'

const Home = () => {

   const [category,setCategory]= useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <Food_display category={category}/>
      <MobileApp/>
    </div>
  )
}

export default Home
