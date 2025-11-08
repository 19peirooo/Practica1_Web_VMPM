import { useState,useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import SeriesList from './components/SeriesList'

function App() {
  
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState('')
  const [favourites,setFavourites] = useState([])

  useEffect(()=>{
    const favs = Object.keys(localStorage).map(key => {
      const serie = JSON.parse(localStorage.getItem(key));
      if (!serie.cast.length) {
        fetch(`https://api.tvmaze.com/shows/${serie.id}/cast`)
          .then (res => res.json())
          .then (data => {
            const cast = get_cast(data);
            serie.cast = cast;
            localStorage.setItem(key,JSON.stringify(serie));
          })
      }
      return serie
    })  
    setFavourites(favs)
  },[])

  const transform_data = (data) => {
    const transformed_data = data.map(item => ({
        nombre: item.show.name,
        img: item.show.image?.original ?? null,
        resumen: item.show.summary,
        id: item.show.id,
        cast:[],
        favourite: false
    }))
    setSeries(transformed_data);
  }

  const transform_cast = (data,id) => {
    const cast = data.map(item => ({
        actor: item.person.name,
        character: item.character.name,
        image: item.character.image?.original ?? null,
    })).slice(0,7)
    const mod_series = series.map(item => {
      if (item.id === id) {
        item.cast = cast;
      }
      return item;
    })
    setSeries(mod_series)
  }

  useEffect(()=>{
      if (!query) return;

      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then (res => res.json())
        .then (data => transform_data(data))

    },[query])

    const showSerieInfo = (id) => {
      fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        .then (res => res.json())
        .then (data => transform_cast(data,id))
    }

    const get_cast = (data) => {
      const cast = data.map(item => ({
        actor: item.person.name,
        character: item.character.name,
        image: item.character.image?.original ?? null,
      })).slice(0,7)

      return cast
    }

    const handleFavourite = (id) => {
      const modified_series = series.map(item => {
        if (item.id === id) {
          item.favourite = !item.favourite;
          if (item.favourite) {
            setFavourites([...favourites,item])
            localStorage.setItem(id,JSON.stringify(item))
          } else {
            const filtered_favourites = favourites.filter(item => item.id != id);
            setFavourites(filtered_favourites)
            localStorage.removeItem(id)
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
        <SeriesList series={series} onFavourite={handleFavourite} handleClick={showSerieInfo}></SeriesList>
      </div>
      <div id='favoritos'>
        <h1 className='titulo'>Favoritos</h1>
        <SeriesList series={favourites} onFavourite={handleFavourite} handleClick={showSerieInfo}></SeriesList>
      </div>
    </>
  )
}

export default App
