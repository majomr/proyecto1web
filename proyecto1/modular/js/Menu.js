import React from 'react';
import './Menu.css'

export default function Menu ({title, texts}) {
    return (
        <div className='menu'>
            <p className = 'titlecss4'>{title}</p>
            {texts.map((text) => (
                <p className = 'textcss4'>{text}</p>
            ))}
        </div>
    );
}; 