import React, { useEffect, useState } from 'react';
import person1 from '../assets/Person1/Person1.png'
import person2 from '../assets/Person2/Person2.png'
import person3 from '../assets/Person3/Person3.png'

interface nextPageClick {
    nextPageClick: () => void;
    setPersonData: React.Dispatch<React.SetStateAction<Person>>;
}

export interface Person {
    description: string;
    image: string;
    name: string;
    position: string;
    number: string;
}

const ContactOptions = ({ nextPageClick, setPersonData }: nextPageClick) => {
    const [selectedCard, setSelectedCard] = useState("");

    //Generates a unique ID
    const generateId = () => Math.random().toString(36).substr(2, 18);

    const persons = [
        {
            description: 'Allgemein',
            image: person1,
            name: 'Jan-Peter Oppenheimer',
            position: 'Head of Digital',
            number: '+49 6221 123 456-78',
        },
        {
            description: 'Buchung',
            image: person2,
            name: 'Romina Parejo Ramón',
            position: 'Consultant Digital',
            number: '+49 6221 123 456-78',
        },
        {
            description: 'Studios',
            image: person3,
            name: 'Jan Koch',
            position: 'Senior Expert Events',
            number: '+49 6221 123 456-78',
        },
        {
            description: 'Egal',
            image: '',
            name: 'Offene Anfrage',
            position: 'Allgemein Infos',
            number: '+49 6221 123 456-78',
        }
    ]

    useEffect(() => {
        setPersonData(persons[parseInt(selectedCard)])
    }, [selectedCard]);


    const handleClick = (e: React.MouseEvent) => {
        setSelectedCard(e.currentTarget.id);
    }

    return <>
        <h1 className='contact-title'>KONTAKT</h1>
        <p className='contact-subtitle'>WER SOLL SICH BEI DIR MELDEN?</p>
        <div className="options-container">
            <div className="cards-container">
                {persons.map((person, index) => {
                    return (
                        <div className="card-container" key={generateId()}>

                            <div className="card-circle"
                                style={selectedCard === index.toString() ? {
                                    border: '2px solid var(--primary)',
                                    background: 'var(--primary) 0% 0% no-repeat padding-box'
                                } : {}}
                            ><i className="fas fa-check"></i></div>
                            <div className="card"
                                onClick={handleClick}
                                id={`${index}`}
                                style={selectedCard === index.toString() ? {
                                    border: '2px solid var(--primary)',
                                    background: '#1A1A1A 0% 0% no-repeat padding-box'
                                } : {}}
                            >
                                <div className="card-description">{person.description}</div>
                                {person.image ? <img className='card-img' src={person.image} alt={person.name} /> : <div className='grey-circle'></div>}
                                <div className="card-name">{person.name}</div>
                                <div className="card-position">{person.position}</div>
                                <div className="card-number">
                                    <div className="number-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.992" height="16.022" viewBox="0 0 15.992 16.022">
                                            <path id="Phone_Icon" data-name="Phone Icon" d="M18.158,14.246v2.261a1.507,1.507,0,0,1-1.643,1.507,14.916,14.916,0,0,1-6.5-2.314,14.7,14.7,0,0,1-4.522-4.522A14.916,14.916,0,0,1,3.174,4.643,1.507,1.507,0,0,1,4.674,3H6.935A1.507,1.507,0,0,1,8.443,4.3,9.678,9.678,0,0,0,8.97,6.414,1.507,1.507,0,0,1,8.631,8l-.957.957A12.06,12.06,0,0,0,12.2,13.484l.957-.957a1.507,1.507,0,0,1,1.59-.339,9.678,9.678,0,0,0,2.118.528,1.507,1.507,0,0,1,1.3,1.53Z" transform="translate(-2.667 -2.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                        </svg>
                                    </div>
                                    <div className="number-digits">{person.number}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        {selectedCard !== "" ?
            <div className="btn-weiter-container">
                <button
                    className='contact-btn-weiter'
                    onClick={nextPageClick}
                >Weiter</button>
            </div>
            :
            <div className="btn-weiter-container-2">
                <button className='contact-btn-weiter-disabled'>Weiter</button>
            </div>
        }

    </>;
};

export default ContactOptions;
