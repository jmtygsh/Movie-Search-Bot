import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'

const Search = () => {

    const router = useRouter()
    const [getMovies, setMovies] = useState("");
    const [category, setCategory] = useState("hollywood");

    const inputMoviesHandler = (e) => {
        const moviesName = e.target.value;
        setMovies(moviesName);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            submitMoviesNameHanlder();
        }
    }

    const submitMoviesNameHanlder = () => {

        if (getMovies === '' || getMovies === '.' || getMovies === ':' || getMovies === '+' ||
            getMovies === '*' || getMovies === '?' || getMovies === '>' || getMovies === '<' ||
            getMovies === '$' || getMovies === '%' || getMovies === '^' || getMovies === '-' ||
            getMovies === '(' || getMovies === ')' || getMovies === '{' || getMovies === '}' ||
            getMovies === '[' || getMovies === ']' || getMovies === '_' || getMovies === '&' ||
            getMovies === '|' || getMovies === '/' || getMovies === '#' || getMovies === '!' ||
            getMovies === '`' || getMovies === '~' || getMovies === ';' || getMovies === ',' ||
            getMovies === "'" || getMovies === '"' || getMovies === undefined) {
            toast.error("Not Allowed");
            return console.log("Not allowed", getMovies);
        }
        else {
            toast('please wait...')
            setTimeout(() => {
                if (category === 'hollywood') {
                    router.push({
                        pathname: '/Hollywood',
                        query: { name: getMovies }
                    })
                } else if (category === 'others') {
                    router.push({
                        pathname: '/Bollywood',
                        query: { name: getMovies }
                    })
                } else if (category === 'anime') {
                    router.push({
                        pathname: '/Animes',
                        query: { name: getMovies }
                    })
                }
            }, 1000);

        }
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="sg">
            <div className="lg:hidden flex flex-row justify-center items-center shadow-lg border-b-[1px] border-black rounded-[5px]">
                <div className="flex justify-center w-full">
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-auto text-xs m-auto py-2 text-center shadow chosen-option transition ease-in-out duration-150 cursor-pointer bg-white rounded-l-md"
                    >
                        <option value="hollywood" className="text-gray-900 text-xs">Hollywood</option>
                        <option value="others" className="text-gray-900 text-xs">Bollywood</option>
                        <option value="anime" className="text-gray-900 text-xs">Animes</option>
                    </select>
                    <input
                        type="text"
                        className="w-full h-9 pl-3 pr-3 focus:outline-none bg-gray-100"
                        placeholder="Enter Movies Name..."
                        onChange={inputMoviesHandler}
                        onKeyDown={handleKey}
                        required
                    ></input>
                    <button
                        type="submit"
                        className=" bg-blue-500 text-white rounded-r-md  ml-[-3px] hover:bg-blue-600 transition-colors duration-150 focus:outline-none"
                        onClick={submitMoviesNameHanlder}
                    >
                        <i className="bx bx-search"></i>
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Search
