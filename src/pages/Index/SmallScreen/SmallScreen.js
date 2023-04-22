import React from 'react'
import Image from 'next/image';
import Boy from "../img/boy.png"

const SmallScreen = () => {
    return (
        <div>
            {/* background image  */}
            <section className='lg:hidden'>
                <div>
                    <h2 className='text-center text-xl'>Explore the World of Cinemas.</h2>
                    <Image src={Boy} alt="dumb-bots" draggable="false" className='w-60 m-auto mt-2' priority={true} />

                    <div className='text-center w-10/12 m-auto'>
                        <p className='mb-5'>Explore a vast collection by dumb-bots.online of movies, tv-shows and animes online for free in every genre and era with our search tool.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SmallScreen;
