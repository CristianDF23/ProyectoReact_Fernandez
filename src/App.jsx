import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { ItemsListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting='Sport Castle'></ItemsListContainer>}/>
          <Route path="/category/:id" element={<ItemsListContainer greeting='Sport Castle'></ItemsListContainer>}/>
          <Route path="/items/:id" element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
