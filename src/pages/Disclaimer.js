import React from 'react'
import Header from './Index/Header'
import Footer from './Index/Footer'
import Head from 'next/head'

const Disclaimer = () => {
    return (
        <>
            <Head>
                <title>Disclaimer - dumb-bots </title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="description" content="Read our Disclaimer, what & how we serv data from the Disclaimer page before you use dumb-bots.online website" />
                <meta charset="UTF-8"></meta>
            </Head>
            <Header />
            <div className='w-3/4 m-auto'>
                <h1 className='text-2xl text-center mt-10 lg:mt-20 border-b-2'>Disclaimer</h1>
                <div className='mt-10'>
                    <p className='text-gray-600'>This site does not store any files on
                        its server. All contents are provided by non-affiliated third parties.
                        We make every effort to ensure that the content provided on this site is legal and free from any illegal material. However, we cannot guarantee the accuracy,
                        completeness, or quality of the content provided by third-party sources.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Encounter any issues</h2>
                    <p className='text-gray-600'>If you encounter any issues
                        with the content on our site, please use our Contact
                        Us form to report any concerns. Our team is dedicated
                        to addressing all concerns promptly and ensuring that our
                        site remains in compliance with all applicable laws and regulations.</p>
                </div>
                <div className='mt-10'>
                    <p className='text-gray-600 mb-3'>We use bots to help us search for and extract data from targeted websites. Our bots work in three steps:</p>
                    <div className='text-gray-600'>
                        <ul>
                            <li>1.You send a keyword to our bots.</li>
                            <li>2.Our bots carry out a targeted search for the keyword on the designated website.</li>
                            <li>3.Our bots extract the data from the website and bring it to you.</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10 mb-10'>
                    <p className='text-gray-600 mb-3'>Please note that our bots are designed to search for publicly available information only. We do not endorse or condone any illegal activity, and any information that is found to be in violation of applicable laws and regulations will be promptly removed from our site.
                        By using our site, you agree to our terms of service and acknowledge that we are not responsible for any harm or damages that may result from your use of our site or the content provided on it.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Disclaimer
