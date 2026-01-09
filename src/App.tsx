
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductPage from './pages/ProductPage'
import { CartProvider } from './context/CartContext'
import CartPage from './pages/CartPage'
import { AuthProvider } from './context/AuthContext'


function App() {


  return (
    <div className='mx-auto max-w-7xl bg-[#f6f6f4]'>
      <CartProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetailsPage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </CartProvider>
    </div>
  )
}

export default App
