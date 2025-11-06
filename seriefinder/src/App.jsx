import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchForm from './components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='buscador'>
        <h1>Buscar Serie</h1>
        <SearchForm></SearchForm>
      </div>
    </>
  )
}

export default App
