import React from 'react';
import Nav from '../nav/';
import Header from '../header/';
import Catalog from '../catalog/';
import Sales from '../sales/';
import Footer from '../footer/';

const Home = () => {
    return (
        <>
            <Nav/>
            <Header/>
            <Catalog/>
            <Sales/>
            <Footer/>
        </>
    )
}

export default Home;