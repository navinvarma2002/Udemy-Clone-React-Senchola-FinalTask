import React from 'react';
import './App.css';
import BrandNavbar from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import Features from './components/Features';
import Footer from './components/Footer';



function App() {
    return (
        <>
            <BrandNavbar />
            <CarouselComponent/>
            <Features />
            <Footer />
        </>
    );
}

export default App;
