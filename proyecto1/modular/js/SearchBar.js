import React from 'react';
import './SearchBar.css';


export default function SearchBar ({text}) {
    return (
        <div className='searchBar'>
            <img src = "https://www.todoticket.com/img/icons/search.svg" alt = "" height="6%" width= "6%"/>
            <input className='barColor' type = "search" placeholder={text}></input>
        </div>
    );
};  

