import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './contexts/CartContext'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { ItemsListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Contact } from './components/Contact'
import { Cart } from './components/Cart'
import { Error404 } from './components/Error404'

import './App.css'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting='Sport Castle'></ItemsListContainer>} />
          <Route path="/category/:id" element={<ItemsListContainer greeting='Sport Castle'></ItemsListContainer>} />
          <Route path="/items/:id" element={<ItemDetailContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Error404/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </CartProvider>
  )
}

export default App
