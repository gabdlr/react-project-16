import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({children, guitar}) => {
    const router = useRouter();
    let currentRoute;
    if(router.asPath === "/"){
        currentRoute = "Home";
    } else {  
        currentRoute = [...router.asPath];
        currentRoute.forEach((value, index) => {
            if(value === "/") currentRoute[index+1] = currentRoute[index+1].toUpperCase();
        });
        currentRoute = currentRoute.join("")
                        .replaceAll("/", " ")
                        .replaceAll("-", " ")
                        .slice(0);                 
    }
    return (  
        <>
            <Head>
                <title>GuitarLA Next App - {currentRoute}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header
                guitar={guitar}
            />
            {children}
            <Footer/>  
        </>
     );
}

Layout.defaultProps = {
    guitar: null
}

export default Layout;