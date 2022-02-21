import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGit, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer f-c'>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGit} />
            <FontAwesomeIcon icon={faFacebook} />
        </div>
    );
};

export default Footer;