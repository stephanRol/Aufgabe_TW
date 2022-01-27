import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactOptions from './ContactOptions';
import { Person } from './ContactOptions'

const ContactContainer = () => {
    const [contactInitialPage, setContactInitialPage] = useState(true);
    const [personData, setPersonData] = useState({} as Person);

    console.log(personData);


    const nextPageClick = () => {
        setContactInitialPage(false);
    }
    const previousPageClick = () => {
        setContactInitialPage(true);
    }

    return <div className='contact-container'>
        <div className="close-img"></div>
        {contactInitialPage ?
            <ContactOptions nextPageClick={nextPageClick} setPersonData={setPersonData} />
            :
            <ContactForm previousPageClick={previousPageClick} personData={personData} />
        }
    </div>;
};

export default ContactContainer;
