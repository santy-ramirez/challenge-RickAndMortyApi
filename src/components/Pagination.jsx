import React from 'react';

function Pagination(props) {
    const { info, handleClickPage, page } = props
    const { prev, pages, next } = info;
    console.log(info)
    console.log(pages, next, prev)

    return (
        <div>
            {info &&
                <div>
                    <button onClick={() => { handleClickPage(page - 1) }} disabled={prev === null} >{prev ? page - 1 : "<"} </button>
                    <button onClick={() => { handleClickPage(page) }} >{page} </button>
                    <button onClick={() => { handleClickPage(page + 1) }}  >{page < 42 ? + page + 1 : ">"}  </button>
                </div>

            }

        </div>
    );
}

export default Pagination;

{
    /**<button  > {info.prev != null ? <a href={info.prev}>{info.pages - 1} </a> : "<"} </button>
            <button> {info.pages} </button>
 */
}