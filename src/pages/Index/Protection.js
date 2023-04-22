import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Image from 'next/image';
const Protection = () => {
    return (
        <>
            <Head>
                <Script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></Script>
            </Head>
            <a href="//www.dmca.com/Protection/Status.aspx?ID=b4ae0429-1376-4d8b-a227-8546c3a01d8b" target='_blank' title="DMCA.com Protection Status" className="dmca-badge">
                <Image src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=b4ae0429-1376-4d8b-a227-8546c3a01d8b" alt="DMCA.com Protection Status" width={100} height={100}/>
            </a>
        </>
    );
};

export default Protection;
