import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './contexts/CartContext'

import { NavBar } from './components/NavBar'
import { ItemsListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Contact } from './components/Contact'
import { Cart } from './components/Cart'

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
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
