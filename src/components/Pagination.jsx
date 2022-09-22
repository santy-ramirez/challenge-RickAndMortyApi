import React from 'react';

function Pagination(props) {
    const { info, characters, handleClickPage, page } = props
    const { prev, pages, next } = info;
    console.log(info)
    console.log(pages, next, prev)

    return (
        <div>
            {characters.length <= 5 ? (<div>{""} </div>) : (

                <div>
                    <button onClick={() => { handleClickPage(page - 2) }} disabled={prev === null} > {"<"} </button>
                    <button onClick={() => { handleClickPage(page - 1) }} disabled={prev < 1}  >{page === 0 ? ".." : page - 1}  </button>
                    <button onClick={() => { handleClickPage(page) }} >{page} </button>
                    <button onClick={() => { handleClickPage(page + 1) }} disabled={next <= pages - 2}   >{page > pages - 2 ? "..." : page + 1}  </button>
                    <button onClick={() => { handleClickPage(page + 2) }} disabled={next === null} > {">"}  </button>
                </div>

            )

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