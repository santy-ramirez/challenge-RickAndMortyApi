import React from 'react';

function Search(props) {
    const { handleChangeSerach } = props
    return (
        <div>
            <input type='text' onChange={handleChangeSerach} />
        </div>
    );
}

export default Search;