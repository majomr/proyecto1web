import React from 'react';
import './Country.css'
import { GiGuatemala } from "react-icons/gi";

export default function Country ({text, imagen}) {
    return (
        <div className='country'>
            <p className='titlecss'>Cambiar de país</p>
            <div className='countryContainer'>
                <GiGuatemala className = 'countryIcon'></GiGuatemala>
                <p className='showText3'>Guatemala</p>
            </div>
        </div>
    );
}; 