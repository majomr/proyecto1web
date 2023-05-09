import React from 'react';
import "./Button1.css";

export default function Button1 ({text, imagen}) {
    return (
        <div>
            <div className="button1">
                <img className="image" src = {imagen} alt = "" />
                <p className="textcss">{text}</p>
            </div>
            <div className='underline2'></div>
        </div>
    );
}; 