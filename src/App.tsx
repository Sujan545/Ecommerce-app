
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'


function App() {


  return (
    <div className='mx-auto max-w-7xl bg-[#f6f6f4]'>
      <Navbar />
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/product/:id' element={<ProductDetailsPage/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
