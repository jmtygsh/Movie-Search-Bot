import React from 'react'

function Card() {
    return (
        <div>
            <div className='text-center lg:mt-28 bg mt-5 hidden lg:block'>
                <h2 className='text-xl lg:text-2xl font-semibold'>Find all movies, tv-shows & animes in one place</h2>
                <div className='feature-box flex flex-row justify-center lg:mt-8 mt-4'>
                    <div className='text-base'>
                        <p>&#10004; Free to use</p>
                    </div>
                    <div className='text-base'>
                        <p>&#10004; Available to download</p>
                    </div>
                    <div className='text-base'>
                        <p> &#10004; Search tool</p>
                    </div>
                </div>
                <div className='feature-box flex flex-row justify-center mt-3'>
                    <div className='lg:text-base text-sm'>
                        <p>&#10004; Data from various website</p>
                    </div>
                    <div className='lg:text-base text-sm'>
                        <p>&#10004; Watch Online</p>
                    </div>
                    <div className='lg:text-base text-sm'>
                        <p> &#10004; All in one solution</p>
                    </div>
                </div>
            </div>

            <div className='text-center mb-14 mt-14 w-[80%] m-auto block lg:hidden'>
                <h2 className='text-xl font-semibold'>Find all movies, tv-shows & animes in one place</h2>
                <div class="feature-box-small flex flex-row flex-wrap justify-center lg:mt-8 mt-4">
                    <div class="bg-blue-500 text-base w-full md:w-auto h-12 bg-transparent border border-black rounded-md flex justify-center items-center m-3 transition duration-300 ease">
                        <p>&#10004; Free to use</p>
                    </div>
                    <div class="text-base w-full md:w-auto h-12 bg-transparent border border-black bg-blue-200 rounded-md flex justify-center items-center m-3 transition duration-300 ease">
                        <p>&#10004; Available to download</p>
                    </div>
                    <div class="text-base w-full md:w-auto h-12 bg-transparent border border-black bg-blue-200 rounded-md flex justify-center items-center m-3 transition duration-300 ease">
                        <p>&#10004; Search tool</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Card;
