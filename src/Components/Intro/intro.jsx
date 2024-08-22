import React from 'react'
import './intro.css'
import bg from '../../eu.jpg'
import { Link } from 'react-scroll'

export const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className="hello">Buna!</span>
                <span className="Introtext">Numele meu este<span className="introName">  Melania </span> <br />si sunt tehnician unghii cu gel.</span>
                <p className="introPara"> Dacă vrei sa ai unghiute frumoase,te invit in locatia mea! Folosesc doar produse profesionale și instrumentar sterilizat corespunzător! </p>
                <Link></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;