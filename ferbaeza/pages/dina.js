import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from'next/link';
import Head from 'next/head';


const Key = dynamic(() => import('./utils/key'), {
    ssr: false,
  });

export default function listener() {    

    return (
      <>
            <Head>
                <title>Vista dos</title>
            </Head>

            <div className="back">
                <Link href="/">
                    <a>Home</a>
                </Link>

            </div>
      
       <Key/>
       </>
    ) 
}


