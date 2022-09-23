import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
function Pagination(props) {
    const { info, characters, handleClickPage, page } = props
    const { prev, pages, next } = info;
    console.log(info)
    console.log(pages, next, prev)

    return (
        <div>
            {characters.length <= 5 ? (<div>{""} </div>) : (

                <div>
                    <Button m={1} onClick={() => { handleClickPage(page - 2) }} disabled={prev === null} > {"<"} </Button>
                    <Button m={1} onClick={() => { handleClickPage(page - 1) }} disabled={prev < 1}  >{page === 0 ? ".." : page - 1}  </Button>
                    <Button m={1} onClick={() => { handleClickPage(page) }} >{page} </Button>
                    <Button m={1} onClick={() => { handleClickPage(page + 1) }} disabled={next <= pages - 2}   >{page > pages - 2 ? "..." : page + 1}  </Button>
                    <Button m={1} onClick={() => { handleClickPage(page + 2) }} disabled={next === null} > {">"}  </Button>
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