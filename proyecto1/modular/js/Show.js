import React from 'react';
import './Show.css'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";

export default function Show ({date, image, title, time, location, buyTickets}) {
   
    return (
        <div className='show'> 
            <div className='show2'>
                {/* front */}
                <p className='showDate2'>{date}</p>
                {/* back */}
                <p className="showTitle">{title}</p>
                <AiOutlineCalendar className='showIcon'></AiOutlineCalendar>
                <p className="showDate">{date}</p>
                <p className="showTime">{time}</p>
                <IoLocationOutline className='showIcon'></IoLocationOutline>
                <p className="showLocation">{location}</p>
                <div className='comprar'>
                    <IoTicketOutline className='ticket'></IoTicketOutline>
                    <p className='showText3'>Comprar tickets </p>
                </div>
            </div>
            {/* image */}
            <img className = 'showImage' src = {image} alt = "" height="100%" width= "100%"/>
        </div>
    );
}; 