import { useState } from "react";
import Link from 'next/link';
import { toast } from 'react-toastify';
import Image from "next/image";
import Logo from "../img/com.png";
import { useRouter } from 'next/router'

const NavbarFull = () => {
    const router = useRouter()
    const [getMovies, setMovies] = useState("");
    const [category, setCategory] = useState("hollywood");

    function inputMoviesHandler(e) {
        const moviesName = e.target.value;
        setMovies(moviesName);
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            submitMoviesNameHanlder();
        }
    }


    function submitMoviesNameHanlder() {

        if (getMovies === '' || getMovies === '.' || getMovies === ':' || getMovies === '+' ||
            getMovies === '*' || getMovies === '?' || getMovies === '>' || getMovies === '<' ||
            getMovies === '$' || getMovies === '%' || getMovies === '^' || getMovies === '-' ||
            getMovies === '(' || getMovies === ')' || getMovies === '{' || getMovies === '}' ||
            getMovies === '[' || getMovies === ']' || getMovies === '_' || getMovies === '&' ||
            getMovies === '|' || getMovies === '/' || getMovies === '#' || getMovies === '!' ||
            getMovies === '`' || getMovies === '~' || getMovies === ';' || getMovies === ',' ||
            getMovies === "'" || getMovies === '"' || getMovies === undefined) {
            return toast.error('Not allowed');
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
        <div className='hidden lg:flex full-navbar'>
            <div className='relative flex space-between items-center m-auto'>
                <Link href="/">
                    <Image src={Logo} className='w-52 h-28' draggable="false" alt='logo' />
                </Link>
                <div className="text-xl p-10 nav-link">
                    <Link href="/" className='m-9'>Home</Link>
                    <Link href="/Pricing" className='m-9'>Pricing</Link>
                    <Link href="/About-us" className='m-9'>About Us</Link>
                    <Link href="/Contact-us" className='m-9'>Contact Us</Link>
                </div>

                <div className='m-auto'>
                    <div className='search-bar'>
                        <div className="flex">
                            <input type="text" placeholder="Search..." className='search-bar-input' onChange={inputMoviesHandler} onKeyDown={handleKey} required />
                            <select
                                value={category}
                                onChange={handleCategoryChange}
                                className="w-[30%] search-nav-bar
								text-center focus:outline-none 
								transition ease-in-out duration-150 cursor-pointer"
                            >
                                <option value="hollywood" className="text-gray-900 text-sm"> Hollywood</option>
                                <option value="others" className="text-gray-900 text-sm">Bollywood</option>
                                <option value="anime" className="text-gray-900 text-sm">Animes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NavbarFull
