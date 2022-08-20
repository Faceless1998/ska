import React from 'react'
import Homecategories from '../homecategories/Homecategories'
import Homehead from '../homehead/Homehead'
import Homenews from '../homenews/Homenews'
import './home.css'
const Home = () => {

  return (
    <>
    <Homehead />
    <Homecategories />
    <Homenews />
    </>
  )
}

export default Home