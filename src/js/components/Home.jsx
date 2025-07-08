import React from 'react';
import Navbar from "./Navbar.jsx";
import Jumbotron from './Jumbotron.jsx';
import Cards from "./Cards.jsx";
import Footer from '../Footer.jsx';

const Home = () => {
    return (
        <>
            <Navbar />
            
            <main className="main-content"> /* Para el css */
                <div className="container">
                    <Jumbotron />
                    <Cards />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Home;