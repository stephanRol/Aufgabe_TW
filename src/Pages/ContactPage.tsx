import React from 'react';
import ContactContainer from '../components/ContactContainer';
import Navbar from '../components/Navbar';

const ContactPage
    = () => {
        return <div className='contactPage-container'>
            <Navbar />
            <ContactContainer />
        </div>;
    };

export default ContactPage;
