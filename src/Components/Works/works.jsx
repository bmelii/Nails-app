import React from 'react';
import '../Works/works.css';
import work1 from './work1.jpg';
import work2 from './work2.jpg';
import work4 from './work4.jpg';
import work5 from './work5.jpg';
import work7 from './work7.jpg';
import work8 from './work8.jpg';
import work10 from './work10.jpg';
import work11 from './work11.jpg';


const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">Lucrarile mele</h2>
            <span className="worksDesc">Manichiura perfectă este aceea care se potrivește cu zâmbetul tău. Există numeroase modele creative, în culori calde sau îndrăznețe, cu forme simple sau extravagante, ideale atât pentru personalitățile sensibile, cât și pentru cele care îi inspiră pe cei din jur. Poți opta pentru orice variantă și chiar ar fi indicat să încerci cât mai multe opțiuni, până o găsești pe cea care ți se potrivește  </span>
            <div className="worksImgs">
                <img src={work1} alt="" className="worksImg" />
                <img src={work2} alt="" className="worksImg" />
                <img src={work4} alt="" className="worksImg" />
                <img src={work5} alt="" className="worksImg" />
                <img src={work7} alt="" className="worksImg" />
                <img src={work8} alt="" className="worksImg" />
                <img src={work10} alt="" className="worksImg" />
                <img src={work11} alt="" className="worksImg" />
            </div>
        </section>
    );
    ;
}

export default Works; 