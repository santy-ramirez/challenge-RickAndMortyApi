
import './App.css'
import Search from './components/Search'
import Table from './components/Table'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(0)
  console.log(characters)

  useEffect(() => {
    console.log("se activo useEfect")
    retriveCharactes()

  }, [page])

  const retriveCharactes = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page} `)
      .then(res => res.json())
      .then(res => setCharacters(res.results) & setInfo(res.info))
  }
  const handleClickPage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <h1>Rick and Morty characters</h1>
      <Search />
      <Table characters={characters} ></Table>
      <Pagination info={info} handleClickPage={handleClickPage} page={page} />
    </div>
  )
}

export default App
