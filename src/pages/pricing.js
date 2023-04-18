import React from 'react'
import Image from 'next/image';
import Node from "../icons/node.svg";
import Rct from "../icons/react.svg";
import Ex from "../icons/next.svg";
import Tag from "../img/tag.png";
import Header from './Index/Header';
import Footer from './Index/Footer';
import Popup from 'reactjs-popup';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Head from 'next/head'


const usePricing = () => {

    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { subject, email};

        emailjs.send('service_0vsxxbo', 'template_ypv2xll', data, 'TRLqncBaYb5sPRRcR')
            .then((result) => {
                toast.success("message send successfully")
            }, (error) => {
                toast.error(error)
            });
    }

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
                <title>Pricing - dumb-bots </title>
            </Head>
            <Header />
            <div className="container my-10 lg:my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-gray-100">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <div className="flex mb-8">
                                        <div className="flex justify-center items-baseline">
                                            <span className="mr-2 text-5xl font-bold">$30</span>
                                            <span>/lifetime</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 mb-6 pb-2">
                                        Ready to take your project to the next level? Now, the solution is at your fingertips! You can purchase this amazing script today and start your tool website, no time.
                                    </p>
                                    <div className="flex flex-wrap mb-6">
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>Fully control
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>Individual configuration
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>Google adsense friendly
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>Bug Fix Updates
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg> Premium support: 6 months
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-600" role="img" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                    </path>
                                                </svg>Custom Branding
                                            </p>
                                        </div>
                                    </div>

                                    <Popup
                                        trigger={<button type="button"
                                            className="mr-5 mb-5 inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            Buy now
                                        </button>}
                                        modal
                                        nested
                                    >
                                        {close => (
                                            <div>
                                                {' '}
                                                <div className='sm-control-pop-up overflow-scroll lg:overflow-hidden lg:h-1/2 lg:w-9/12 md:w-3/4 bg-gray-900 shadow-2xl rounded-lg text-white m-auto p-10'>
                                                    <h2 className=' font-semibold text-xl text-center mb-3'>Create a Purchase Order</h2>
                                                    <p className='border-b mb-3'></p>
                                                    <p>Your email id is very important because we will send the download links there so, make sure your email is correct.</p>
                                                    <li>First, Enter all neccessary details and send message</li>
                                                    <li>2nd, We contact you then Scan and Pay</li>
                                                    <li>3rd, Verify and Send download links on email</li>
                                                    <section>
                                                        <div className="py-2 px-4 mx-auto max-w-screen-md">
                                                            <form className="space-y-8" onSubmit={handleSubmit}>
                                                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name123@gamil.com" onChange={(e) => setEmail(e.target.value)} required />
                                                                <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Full Name" onChange={(e) => setSubject(e.target.value)} required />

                                                                <button type="submit" className="py-2 px-4 text-sm font-medium text-center bg  text-black rounded-lg bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none ">Send message</button>
                                                            </form>
                                                        </div>
                                                    </section>

                                                    <p className='border-b'></p>
                                                    <div className="mt-5 text-center">
                                                        <button onClick={close} type="button" className="text-white  w-48  bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-72">close</button>
                                                    </div>
                                                </div>

                                            </div>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto hidden w-full lg:flex lg:w-6/12 xl:w-3/12">
                                <Image src={Tag} alt="50% offer" draggable="false" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='mb-20'>
                <h2 className='text-center text-xl lg:text-2xl text-red-500 mb-10'>Attention!! Before Buy Read This ...</h2>
                <div className='flex justify-center'>
                    <div className='m-5'> <Image src={Node} draggable="false" alt='node js' /> </div>
                    <div className='m-5'> <Image src={Rct} draggable="false" alt='react js' /> </div>
                    <div className='m-5 w-32'> <Image src={Ex} draggable="false" alt='next js' /> </div>
                </div>
                <div className='text-center mb-10'>
                    <h3 className='border-b-2 w-10/12 lg:w-2/4 m-auto text-xl lg:text-2xl mb-5'>Technology used are Node js, React js & Next js</h3>
                    <p className='w-3/4 m-auto text-base lg:text-xl'>Introducing our search bot for movies, web-series & animes, <br />
                        The ultimate automation that scours various websites
                        and brings data you need based on your search keywords!<br /><br />

                        This powerful tool is a single page application built with React JS, making it lightning fast and ultra-responsive.<br />

                        The script&apos;s primary function is to deploy a headless browser and retrieve all the data
                        from the selected website based on your search keywords. <br /><br />

                        It&apos;s the perfect solution, <u className='text-red-500'>instead of searching one by one website</u>, use this bots
                        you <u className='text-red-500'>just need one click </u>and it will show all available data that can download & watch online
                        so, save your time. <br /><br />


                        Remember to identify your target websites and where you want to retrieve data from. but how?
                        <br />
                        Worry not we&apos;ve got you covered! Our blogs section contains all the information you need,
                        or you can simply click here to access the documentation.

                        <br /><br />
                        So, what are you waiting for? Dive in and start experiencing the power of our search bot today! But remember,
                        it&apos;s essential to read the documentation thoroughly before initializing the script. <u className='text-red-500'> Node </u>you must read the document before you begin.
                        <br /></p>
                    <h3 className='border-b-2 w-10/12 lg:w-2/4 m-auto text-xl lg:text-2xl mt-10 mb-5'>Got a technical issue? Let us know please...</h3>
                    <p className='w-3/4 m-auto text-base lg:text-xl mb-5'>Don&apos;t worry! if you facing any kind of error just contact us, We will there for you to solve your problem till your website working fine.
                        However, we will check your order key so, take screenshot or copy it.</p>
                    <code className='bg-gray-300 p-4 rounded-md text-base lg:text-xl'>devygsh@gmail.com</code>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default usePricing
