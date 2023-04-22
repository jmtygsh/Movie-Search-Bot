import React from 'react'
import Header from './Index/Header'
import Footer from './Index/Footer'
import Link from 'next/link'
import Head from 'next/head'
const privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - dumb-bots </title>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
                <meta name="description" content="Read our policies regarding collection from the privacy and policy page before you use dumb-bots.online website" />
                <meta charset="UTF-8"></meta>
            </Head>
            <Header />
            <div className='w-3/4 m-auto'>
                <h1 className='text-2xl text-center mt-10 lg:mt-20 border-b-2'>Privacy Policy</h1>
                <div>
                    <h2 className='text-xl mt-10 mb-5'>Last updated: [20-04-2023]</h2>
                    <p className='text-gray-600'>This page is intended to inform website visitors
                        about our policies regarding the collection,
                        use, and disclosure of Personal Information if they choose to use our Service.<br />

                        By using our Service, you agree to the collection but we don&apos;t collect any Personal Information

                        But we do collect email information to provide our service like helping out from any
                        technical issue etc,

                        Also, We will not share your information with any third parties except as described in this Privacy Policy.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Information Collection and Use</h2>
                    <p className='text-gray-600'>For a better experience, while using our Service,
                        we may require you to provide us with certain personally identifiable information,
                        including but not limited to your name and email.
                        The information that we collect will be used to contact or identify you.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Cookies</h2>
                    <p className='text-gray-600'>Cookies are used commonly
                        used as unique identifiers. They are sent to
                        your browser from the website you visit and are stored on your device&apos;s hard drive but we don&apos;t
                        now, we are planning to use Cookies in future.
                    </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Security</h2>
                    <p className='text-gray-600 mb-3'>The security of your Information
                        is important to us, but remember that no method of 
                        transmission over the Internet,
                        or method of electronic storage, is 100% secure.
                        While we strive to use commercially acceptable means
                        to protect your Information,
                        we cannot guarantee its absolute security.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl'>Changes to This Privacy Policy</h2>
                    <p className='text-gray-600 mb-3'>We may make updates to our Privacy Policy periodically.
                        Therefore, we recommend that you review this page regularly for any changes.
                        Any changes made to this Privacy Policy will be posted on this page and will be effective
                        immediately upon posting.
                        We will also notify you of any significant changes by providing a
                        notice on our website or by other means,
                        where appropriate and required by law.</p>
                </div>
                <div className='mt-10 mb-10'>
                    <h2 className='text-xl'>Contact Us</h2>
                    <p className='text-gray-600 mb-3'>If you have any questions or suggestions,
                        <Link href={'/Contact-us'} className='text-blue-600'>contact us</Link></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default privacy

