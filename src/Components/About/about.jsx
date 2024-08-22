import React from 'react'
import './about.css'
import Passion from '../About/passion.jpg'
import Will from '../About/will.jpg'
import Patience from '../About/patience.jpg'


const About = () => {
    return (
        <section id='about'>
            <span className="skillTitle">Despre Mine</span>
            <span className="skillDescription">Povestea mea a inceput de la zero,in 2016,dupa terminarea liceului cand am decis sa imi urmez visul si sa ma apuc de manicihiura. In 2016 am participat la un curs,in Brasov,unde am invatat foarte multe lucruri. Am avut un trainer extraordinar care mi-a dovedit ca e bine sa mai si gresim deoarece gresind putem invata. De 8 ani lucrez cu pasiune pentru clientele mele,pun suflet in ceea ce fac pentru ca mainile sunt cartea de vizita cu care te prezinti in fata oricui. De 4 ani am inceput sa le ofer clientelor si servicii de pedichiura cu oja semipermanenta. Indiferent de sezon,eu cred ca pedichiura trebuie sa fie facuta. Iubesc ceea ce fac,iubesc unghiile frumoase si executate corect si te astept cu drag si pe tine sa ma ocup de manichiura ta!
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Passion} alt="Pasiune" className="skillBarImg" />
                    <h2>Pasiune</h2>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Will} alt="Vointa" className="skillBarImg" />
                    <h2>Vointa</h2>
                </div>
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={Patience} alt="Rabdare" className="skillBarImg" />
                        <h2>Rabdare</h2>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About