import React from 'react'
import Link from 'next/link'

const Attention = () => {
    return (
        <div className='mb-10 lg:mb-28 w-[80%] m-auto '>
            <div className='text-center border-slate-400 p-6 lg:p-10'>
                <h3 className='font-semibold text-xl lg:text-2xl mb-5'>Data sources, Filtering system, and Data collection methods are - </h3>
                <p className='text-base lg:text-lg leading-7 lg:leading-8'>
                    <i className='bx bxs-quote-left'></i>
                    Our bot sources data from Google by searching and 
                    filtering according to users keywords, finding movie <br/>
                    websites with matching keywords, and extracting 
                    data in real-time to show to users for easy navigation. 
                    Our filtering system ensures that we do not recommend 
                    copyright content or illegal movies, web-series, 
                    and anime to users. If by chance encounter any 
                    copyright content, please let us know, 
                    and we guarantee to fix it immediately.
               
                    Our bot&apos;s data collection method involves sourcing 
                    movies websites from Google, targeting specific websites, 
                    and bringing back data when users send a keyword. However,
                     we do not store any files such as images or videos etc on 
                     our own servers since our bot works in real-time.
                    <i className='bx bxs-quote-right'></i>
                </p>
            </div>
            <div className='text-center border-slate-400 p-6 lg:p-10 hidden lg:block'>
                <h3 className='font-semibold text-xl lg:text-2xl mb-5'>Discover a whole new world of third-party
                    content for your private or educational use!</h3>
                <p className='ttext-base lg:text-lg leading-7 lg:leading-8'>
                    <i className='bx bxs-quote-left'></i>
                    Say hello to dumb-bots.online -
                    your ultimate source for unrivaled access<br /> to a vast
                    collection of content that you won&quot;t find anywhere else.
                    With our crawler and bot, you can explore and enjoy a wide
                    range of amazing content, all without having to worry about
                    the risks associated with downloading from untrustworthy sources.
                    What sets us apart from other content providers is that
                    &nbsp;<strong>we don&apos;t host or store any content on our servers</strong>.
                    <br/>This means you can
                    indulge in your favorite movies, TV shows, and music without any
                    fear of malware or copyright infringement. At dumb-bots.online,
                    we take your safety seriously.
                    We have a team dedicated to ensuring that our
                    content is 100% legal and free from any illegal material.
                    But just in case you encounter any issues, we have a handy&nbsp;
                    <Link href='/Contact-us' target='_black' className='text-blue-500'>Contact Us</Link> form that you can use to report any concerns.

                    So, Start exploring the incredible world of
                    cinema content today with dumb-bots.online.
                    With our vast collection of content, you&apos;re sure to find
                    something that will pique your interest.
                    <i className='bx bxs-quote-right'></i>
                </p>
            </div>


        </div>
    )
}

export default Attention
