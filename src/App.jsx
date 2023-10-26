import { NavBar } from './components/NavBar'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting='Sport Castle'>Bienvendios a </ItemListContainer>
      </main>
    </>
  )
}

export default App
