import { useState } from 'react'
import { Suspense } from 'react'
import Footer from './components/Footer'
import './App.css'
import Banner from './components/Banner'
import BannerBot from './components/BannerBot'
import CardCon from './components/CardCon'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import GetStarted from './components/GetStarted'
import ProCardCon from './components/ProCardCon'
import { ToastContainer } from 'react-toastify'

  const fetchProducts = async () =>{
      const res = await fetch('/data.json');
      return res.json();

  }


const promiseProducts = fetchProducts();

function App() {
  const [totalCart, setTotalCart] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
  <Navbar selectedProduct={selectedProduct}></Navbar>
  <Banner></Banner>
  <BannerBot></BannerBot>
  <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <ProCardCon promise = {promiseProducts} totalCart={totalCart} setTotalCart={setTotalCart} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></ProCardCon>
  </Suspense>
  <CardCon></CardCon>
  <Pricing></Pricing>
  <GetStarted></GetStarted>
  <Footer></Footer>
  <ToastContainer></ToastContainer>
    </>
  )
}

export default App
