import React from 'react';
import Picture from '../images/profile-pic.jpg';

const ProfilePicture = () => {
    return (
        <div className='pic-con'>
            <img src={Picture} alt="" />
        </div>
    );
};

export default ProfilePicture;