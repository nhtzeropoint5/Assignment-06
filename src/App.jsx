// import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import BannerBot from './components/BannerBot'
import CardCon from './components/CardCon'
import Navbar from './components/Navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  <Navbar></Navbar>
  <Banner></Banner>
  <BannerBot></BannerBot>
  <CardCon></CardCon>
    </>
  )
}

export default App
