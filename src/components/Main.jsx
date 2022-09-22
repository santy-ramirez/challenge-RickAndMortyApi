import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Search from './Search';
import Table from './Table';

function Main(props) {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({});
    const [page, setPage] = useState(0)
    const [character, setCharacter] = useState({})

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

    const handleChangeSerach = (e) => {
        console.log(e.target.value)
        const chartFilt = characters.filter(character => character.name.toLowerCase().includes(e.target.value))
        console.log(chartFilt)
        setCharacters(chartFilt)
    }
    const handleClickDetaild = (ch) => {
        console.log(ch);

    }

    return (
        <div>
            <h1>Rick and Morty characters</h1>
            <Search handleChangeSerach={handleChangeSerach} />
            <Table characters={characters} handleClickDetaild={handleClickDetaild} />
            <Pagination characters={characters} info={info} handleClickPage={handleClickPage} page={page} />
        </div>
    );
}

export default Main;