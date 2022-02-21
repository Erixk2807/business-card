import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Button = ({modifier}) => {
    return (
        <button className={`${modifier == 'email' ? 'btn__icon--email' : 'btn__text--linkedin'} f-c btn`} >
            {modifier == 'email' ? <FontAwesomeIcon icon={faEnvelope} /> : <FontAwesomeIcon icon={faLinkedin} />}
            <a>{modifier == 'email' ? 'Email' : 'LinkedIn'}</a>
        </button>
    );
};

export default Button;