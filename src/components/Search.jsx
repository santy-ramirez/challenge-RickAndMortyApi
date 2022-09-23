import React from 'react';
import { Input } from '@chakra-ui/react'

function Search(props) {
    const { handleChangeSerach } = props
    return (
        <div>
            <Input type='text' placeholder='type something' onChange={handleChangeSerach} />
        </div>
    );
}

export default Search;