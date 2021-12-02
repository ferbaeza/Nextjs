import useScrollPosition from "./utils/scroll";
import Link from'next/link';
import Head from 'next/head';



const scrollPosition = useScrollPosition();
console.log(scrollPosition); 
/*
export default function backHome() {   
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

       </>
    ) 
}

*/