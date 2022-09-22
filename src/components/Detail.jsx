import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Detail(props) {
    let { id } = useParams();
    const [character, setCharacter] = useState({ id: "", name: "", type: "", image: "" });
    console.log(character)

    console.log(id)
    useEffect(
        () => {
            retriveCharactes();
        }, []
    )
    const retriveCharactes = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id} `)
            .then(res => res.json())
            .then(res => setCharacter(res))
    }
    const { name, type, image } = character;
    return (
        <div>
            <img src={image} />
            <div>{name} </div>
            <div>{id} </div>
            <div>{type} </div>


            <div>HOLA DETAIL</div>
        </div>
    );
}

export default Detail;
