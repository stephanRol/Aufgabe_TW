import React, { useState } from 'react';
import { Person } from './ContactOptions'

interface previousPageClick {
    previousPageClick: () => void;
    personData: Person;
}

const ContactForm = ({ previousPageClick, personData }: previousPageClick) => {
    const [callConfirm, setCallConfirm] = useState(false);

    const handleYesClick = () => {
        setCallConfirm(true);
    }

    const handleNoClick = () => {
        setCallConfirm(false);
    }

    return <div className='contact-form'>
        <div className="left-side-form">
            <div className='back-button' onClick={previousPageClick}>
                <i className="fas fa-chevron-left"></i>
                <p>zurück</p>
            </div>
            <h1 className='form-title'>KONTAKT</h1>
            <div className="form-person-chosen">
                {/* <img className='form-person-img' src={personData.image} alt="" /> */}
                {personData.image ? <img className='form-person-img' src={personData.image} alt={personData.name} /> : <div className='grey-circle'></div>}
                <p className="form-person-name">{personData.name}</p>
            </div>
            <p className='form-question'>Du hast Fragen oder willst einen Termin ausmachen? Dann schreib mir.</p>
            <form className='form-inputs'>
                <input
                    type="email"
                    className='email' placeholder='E-Mail-Adresse' />
                <input
                    type="text"
                    className='full-name' placeholder='Vollständiger Name' />
                <textarea
                    className='textfield'
                    placeholder='Worum gehts?'
                />
            </form>
        </div>
        <div className="right-side-form">
            <p className='text-frage'>Oder soll ich Dich anrufen?</p>
            <div className="buttons-call">
                <div className={`button-yes-container ${callConfirm ? "active" : ""}`} onClick={handleYesClick}>
                    <div className="button-yes">
                        <i className="fas fa-check"></i>
                    </div>
                    <p className='text-jup'>Jup!</p>
                </div>
                <div className={`button-no-container ${!callConfirm ? "active" : ""}`} onClick={handleNoClick}>
                    <div className="button-no">
                        <i className="fas fa-times"></i>
                    </div>
                    <p className='text-nope'>Nope</p>
                </div>
            </div>
            {callConfirm ?
                <>
                    <input
                        className='contact-number'
                        type="text"
                        placeholder='Handynummer / Telefonnummer'
                    />
                    <input
                        className='appointment-date'
                        type="text"
                        placeholder='Bevorzugter Termin?'
                    />
                    <p className='text-1'>Du willst mehr zum Umgang mit Deinen Daten wissen? Alle Infos im Detail findest du hier:</p>
                    <p className='text-2'>Datenschutzrichtlinie</p>
                </>
                : null}
            <button className='send-form-button'>Abschicken</button>
            <p className='text-3'>Durch das Abschicken stimmst du unseren Nutzungsbedingungen zu. In unserer Datenrichtlinie erfährst du, wie wir deine Daten erfassen, verwenden und teilen. Unsere Cookie-Richtlinie erklärt, wie wir Cookies und ähnliche Technologien verwenden.</p>
        </div>
    </div >;
};

export default ContactForm;
