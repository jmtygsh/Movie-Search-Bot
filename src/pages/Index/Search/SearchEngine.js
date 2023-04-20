import React, { useState } from "react";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

const SearchEngine = () => {
	const router = useRouter();
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
			return toast.error('Not allowed');
		} else {
			toast('please wait...', {
				position: "top-center",
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: "light",
			});
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
		<div className="home mb-28 mt-24 hidden lg:block">
			<section className="search-section">
				<div className="search-box shadow-md">
					<div>
						<h2 className="search-title text-2xl">What are you looking for!</h2>
						<div className="search-input-box">
							<span className="search-icon">
								<i className='bx bx-search'></i>
							</span>
							<input type="text" onChange={inputMoviesHandler} onKeyDown={handleKey} required />
							<label>Search... </label>
						</div>
						<div className="flex justify-around">
							<select
								value={category}
								onChange={handleCategoryChange}
								className="block appearance-none w-[40%] bg-white border border-gray-400 hover:border-gray-500 py-2 
								rounded-[10px] text-center shadow leading-tight focus:outline-none 
								focus:shadow-outline transition ease-in-out duration-150 mr-3 hover:bg-blue-100 cursor-pointer"
							>
								<option value="hollywood" className="text-gray-900"> &#10004; Hollywood</option>
								<option value="others" className="text-gray-900">&#10004; Bollywood</option>
								<option value="anime" className="text-gray-900">&#10004; Animes</option>

							</select>


							<button type="submit-btn" className="shadow btn-submit" onClick={submitMoviesNameHanlder}>
								<i className='bx bxs-bot'></i>Search
							</button>
						</div>
						<div className="nothing-link">
							<p>Don&apos;t know How To Use?&nbsp; scroll down</p>
						</div>
					</div>
				</div>
			</section >
		</div >
	)
}

export default SearchEngine;