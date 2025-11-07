import { useState,useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import SeriesList from './components/SeriesList'

function App() {
  
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')
  const [favourites,setFavourites] = useState([])

  const transform_data = (data) => {
    const transformed_data = data.map(item => ({
        nombre: item.show.name,
        img: item.show.image?.original ?? null,
        resumen: item.show.summary,
        id: item.show.id,
        favourite: false
    }))
    setSeries(transformed_data);
  }

  useEffect(()=>{
      if (!query) return;

      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then (res => res.json())
        .then (data => transform_data(data))

    },[query])

    const handleFavourite = (id) => {
      const modified_series = series.map(item => {
        if (item.id === id) {
          item.favourite = !item.favourite;
          if (item.favourite) {
            setFavourites([...favourites,item])
          } else {
            const filtered_favourites = favourites.filter(item => item.id != id);
            setFavourites(filtered_favourites)
          }
        }
        return item;
      })
      setSeries(modified_series);
    }

  return (
    <>
      <div id='buscador'>
        <h1 className='titulo'>Buscar Serie</h1>
        <SearchForm onSearch={setQuery}></SearchForm>
        <SeriesList series={series} onFavourite={handleFavourite}></SeriesList>
      </div>
      <div id='favoritos'>
        <h1 className='titulo'>Favoritos</h1>
        <SeriesList series={favourites} onFavourite={handleFavourite}></SeriesList>
      </div>
    </>
  )
}

export default App
