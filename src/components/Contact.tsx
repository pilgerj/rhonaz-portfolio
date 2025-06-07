import React from 'react';
import asciiArt from '../assets/4d.gif';

const Contact: React.FC = () => {
        return (
        <div className="contact-container">
            <img style={{width: '100%', height: '100%', marginTop: -30}} src={asciiArt} alt="4d" />
        </div>
    );
};

export default Contact;
