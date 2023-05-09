import React from 'react';
import './ToolBar.css'
import { GrFacebookOption } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsSnapchat } from "react-icons/bs";

export default function ToolBar ({}) {
    return (
        <div className='toolbar'>
            <div className='iconcss'>
                <GrFacebookOption className='iconcss2'></GrFacebookOption>
            </div>
            <div className='iconcss'>
                <ImTwitter className='iconcss2'></ImTwitter>
            </div>
            <div className='iconcss'>
                <BsInstagram className='iconcss2'></BsInstagram>
            </div>
            <div className='iconcss'>
                <BsSnapchat className='iconcss2'></BsSnapchat>
            </div>
        </div>
    );
}; 