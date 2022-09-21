import React from 'react';

function Table(props) {
    const { characters } = props;
    console.log(characters)
    return (
        <div>
            <div> {characters ? "firts results: " + characters.length : "no se encontraron resultados"}</div>

            <table className="table">
                <thead>
                    <tr  >
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">status</th>
                        <th scope="col">specie</th>
                        <th scope="col">gender</th>
                        <th scope="col">Episodios</th>
                    </tr>
                </thead>
                <tbody>

                    {characters.map(t => <tr key={t.id} >
                        <th scope="row">{t.id} </th>
                        <th >{t.name}</th>
                        <th>{t.status} </th>
                        <th>{t.species}</th>
                        <th>{t.gender} </th>
                        <th> <a href={t.episode} >ver</a>  </th>

                    </tr>)}

                </tbody>
            </table>
        </div>
    );
}

export default Table;