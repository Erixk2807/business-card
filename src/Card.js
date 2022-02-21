import React from 'react';
import './Card.css';
import ProfilePicture from './Components/ProfilePicture';
import Header from './Components/Header';
import Info from './Components/Info';
import Footer from './Components/Footer';

const Card = () => {
    return (
        <div className='container f-c'>
            <div className='card f-c'>
                <ProfilePicture />
                <div className='content f-c'>
                    <Header />
                    <Info />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Card;