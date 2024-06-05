import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Main from './Components/Main/Main';
import Premium from './Components/Premium/Premium';
import Adv from './Components/Advantages/Adv';
import Testimonial from './Components/Testimonial/Testimonial';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Premium />
      <Adv />
      <Testimonial />
      <Faq />
      <Footer/>
    </>
  )
}

export default App
