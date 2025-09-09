
import './App.css'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Service from './component/Service'
import { Routes,Route } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import Language from './component/Language'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/service' element={<Service/>} >
       <Route path=':lang' element={<Language/>}/>
      </Route>
      <Route path='/about' element={<About/>} />
      <Route path='/about/:id' element={<About/>} />
      <Route path='/about/:id/:num' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
