import React, { useRef } from 'react';
import '../Contact/contact.css';
import Nail1 from './nail 1.jpg';
import Nail2 from './nail 2.png';
import Pedi from './pedi.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_w8m376h', 'template_ewrkjvb', form.current, '2pv-Mh_S3wh9eNNgl',)
            .then((result) => {
                console.log(result.text);
                alert('Email Sent !')
            }, (error) => {
                console.log(error.text);
            },
            );
    };
    return (
        <section id="contactPage">
            <div id="services">
                <h1 className="contactPageTitle">Servicii</h1>
            </div>
            <div className="servicesImgs" />
            <img src={Nail1} alt="services" className='servicesImg' />
            <p>Constructie gel - 120 lei</p>
            <img src={Nail2} alt="services" className='servicesImg' />
            <p>Intretinere - 100 lei</p>
            <img src={Pedi} alt="services" className='servicesImg' />
            <p>Pedichiura semipermanenta - 100 lei</p>


            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="name" className="name" placeholder='Nume' name='your_name' />
                    <input type="email" className="email" placeholder='Email' name='your_email' />
                    <input type="phone" className="phone" placeholder='Telefon' name='your_phone' />
                    <textarea className='msg' name='message' rows="5" placeholder='Mesaj'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Trimite mesaj</button>
                </form>
            </div>
        </section >
    );
}

export default Contact;