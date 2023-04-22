import React from 'react'

const TotalData = () => {
    return (
        <div className='mb-20 lg:mb-28'>
            <div className='text-center p-5 lg:p-10 bg-slate-100'>
                <h2 className='text-xl lg:text-2xl mb-5 lg:mb-10 font-semibold'>All the movies, web-series & animes, at one place.</h2>
                <div className='flex flex-wrap justify-center'>
                    <div className='m-5 lg:m-10 flex'>
                        <div>
                            <h5 className='font-bold mt-2 mr-2 text-2xl'>1M+</h5>
                        </div>
                        <div>
                            <h6>Movies,<br />Tv-shows</h6>
                        </div>
                    </div>

                    <div className='m-5 lg:m-10 flex'>
                        <div>
                            <h5 className='font-bold mt-2 mr-2 text-2xl'>50k+</h5>
                        </div>
                        <div>
                            <h6>Animes <br />Watch online</h6>
                        </div>
                    </div>

                    <div className='m-5 lg:m-10 flex'>
                        <div>
                            <h5 className='font-bold text-2xl mt-2'><i className='bx bx-file'></i></h5>
                        </div>
                        <div>
                            <h6 className='mt-2'>4k / HD Quality Available</h6>
                        </div>
                    </div>

                    <div className='m-5 lg:m-10 flex'>
                        <div>
                            <h5 className='font-bold text-2xl mt-2'><i className='bx bx-download'></i></h5>
                        </div>
                        <div>
                            <h6 className='mt-2'>Hindi & English Dub Available</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default TotalData
