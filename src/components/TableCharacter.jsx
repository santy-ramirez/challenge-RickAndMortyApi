import React from 'react';
import { Link } from 'react-router-dom';
import Detail from './Detail';


import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

function TableCharacter(props) {
    const { characters, handleClickDetaild } = props;
    console.log(characters)
    return (
        <div>
            <TableContainer>
                <div> {characters ? "firts results: " + characters.length : "no se encontraron resultados"}</div>

                <Table  >
                    <Thead>
                        <Tr  >
                            <Th >id</Th>
                            <Th >name</Th>
                            <Th >status</Th>
                            <Th >specie</Th>
                            <Th >gender</Th>
                            <Th >Episodios</Th>
                            <Th >detail</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {characters.map(t => <Tr key={t.id}>
                            <Th scope="row">{t.id} </Th>
                            <Th >{t.name}</Th>
                            <Th>{t.status} </Th>
                            <Th>{t.species}</Th>
                            <Th>{t.gender} </Th>
                            <Th> <a href={t.episode} >ver</a>  </Th>
                            <Th> <Link to={`character/${t.id}`} onClick={() => handleClickDetaild(t.id)}  >ver detail</Link>  </Th>
                        </Tr>)}

                    </Tbody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default TableCharacter;