import React from 'react';
import ctaImg from '../assets/cta.png';
const Cta = () => {
    return (
        <div className='py-11'>
            <div className="container">
                <div className="cta-img">
                    <img src={ctaImg} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Cta;