import React from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Banner from '../../componentes/Banner/Banner';
import RowList from './../../componentes/Rows/RowList/RowList';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <RowList />
            <Footer />
        </>
    );
}

export default Home;
