import React from 'react';
import "./Button1.css";
import './CallCenter.css'

export default function CallCenter ({text, imagen}) {
    return (
        <div className='callcenter'>
            <div className = 'divcss'>
                <img src = "//www.todoticket.com/img/icons/callcenter.svg" alt = "" height="90%" width= "100%"/>
            </div>
            <div>
                <p className='textcss3'>W H A T S A P P</p>
                <p className='text2css3'>2305-6444</p>
            </div>
        </div>
    );
}; 