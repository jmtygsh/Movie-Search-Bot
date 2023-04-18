import React, { useState, useEffect } from "react";
import Header from './Index/Header';
import Footer from './Index/Footer';
import Search from './Index/Search/Search';
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

const Result = () => {

    // Declare Location 
    const router = useRouter();

    //Declare state variables
    const [getKeyword, setKeyword] = useState('')
    const [getList, setLst] = useState([]);
    const [getImg, setImg] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [getTime, setTime] = useState("");


    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);

            try {
                const { name } = router.query
                setKeyword(name)
                if (!name || name.trim() === '') {
                    return toast.error("Try again...");
                }
                setTimeout(async () => {
                    const timerStart = Date.now()
                    await axios.post('https://api.dumb-bots.online/list', { keywordValue: name, passcode: "uydhtsdd245@" })
                        .then(res => {
                            setLst(res.data.result)
                            setImg(res.data.imgaesUrls)

                            console.log(res)

                            const timerStop = Date.now() - timerStart;
                            setTime(Math.floor(timerStop / 1000))
                        }).catch(err => {
                            toast.error('something wrong!')
                        }).finally(() => {
                            setIsLoading(false);
                            toast.success("Complete")
                        });
                }, 2000);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, [router]);

    const items = getList.map((item, index) => {
        const imgUrl = getImg[index];
        console.log({ url: item, imgUrl: imgUrl })
        return { url: item, imgUrl: imgUrl };
    });

    return (
        <div>
            <Head>
                <title>Result - dumb-bots </title>
            </Head>
            <Header />
            <div className="text-center mt-5">
                <Search />
            </div>
            {isLoading && <div id="loading">Loading...</div>}

            <center className="border-solid border-b-2 p-[1.5rem] rounded-lg lg:border-none mb-[14rem] mx-2 lg:mx-[3rem]">
                <div>
                    <h2 className='text-sm lg:text-base mt-5 mb-6'>About {(getList.length)} results ({getTime}&nbsp;sec) for {getKeyword}</h2>
                    <div className='mb-10 text-center w-11/12 lg:w-4/5 m-auto   border-slate-400 p-2'>
                        <h2 className='border-slate-400 text-red-600 mb-2 text-xl border-b'>Attention!</h2>
                        <p>&quot;Do not use or download copyrighted content. 
                            Our bots search all freely available websites in Google to find free content. 
                            This is why our bots extract the content to make it easier for all users to navigate. 
                            Our bots work in real-time and we do not store any data.&quot;</p>
                    </div>

                </div>

                {getList.length === 0 ? (
                    <p className="text-red-500">No data found</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {items.map((item, index) => (
                            <div key={index} className="bg-black text-white rounded-lg ">
                                <div className="w-full">
                                    <img src={item.imgUrl} alt="poster" width={300} height={300} /* eslint-disable-next-line @next/next/no-img-element */ className="rounded-t-lg" />
                                </div>
                                <Link href={item.url} target="_blank" rel="noreferrer">
                                    <h3 className='text-xs md:text-base lg:text-base w-9/12 mt-5 p-2'>{item.url.replace(
                                        /https:\/\/moviesmod\.net\.in\/|https:\/\/hdmovie2\.city\/|https:\/\/hdhub4u\.report\//g, "")
                                        .toUpperCase()}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

            </center>
            <Footer />
        </div>
    )

}

export default Result
