// import { useState } from 'react'
import Footer from './components/Footer'
import './App.css'
import Banner from './components/Banner'
import BannerBot from './components/BannerBot'
import CardCon from './components/CardCon'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <Banner></Banner>
  <BannerBot></BannerBot>
  <CardCon></CardCon>
  <Pricing></Pricing>
  <Footer></Footer>
    </>
  )
}

export default App
