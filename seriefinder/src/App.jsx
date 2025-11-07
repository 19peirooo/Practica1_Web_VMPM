import { useState,useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import SeriesList from './components/SeriesList'

function App() {
  
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')

  const transform_data = (data) => {
    const transformed_data = data.map(item => ({
        nombre: item.show.name,
        img: item.show.image?.original ?? null,
        resumen: item.show.summary,
        id: item.show.id
    }))
    setSeries(transformed_data);
  }

  useEffect(()=>{
      if (!query) return;

      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then (res => res.json())
        .then (data => transform_data(data))

    },[query])

  return (
    <>
      <div id='buscador'>
        <h1 className='titulo'>Buscar Serie</h1>
        <SearchForm onSearch={setQuery}></SearchForm>
        <SeriesList series={series}></SeriesList>
      </div>
    </>
  )
}

export default App
