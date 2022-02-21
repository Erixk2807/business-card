import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <div className='f-c header'>
            <h1 className='header__name'>Eriks Kisko</h1>
            <h2 className='header__role'>Frontend Developer</h2>
            <a href="" className='header__website'>erixk.com</a>
            <div className='btn-con f-c'>
                <Button modifier='email'/>
                <Button modifier='linkedin'/>
            </div>
        </div>
    );
};

export default Header;