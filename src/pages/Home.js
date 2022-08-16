import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import '../styles/index.scss';
const Home = () => {
    return (
        <div>
        <Logo />
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;