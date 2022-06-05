import React from 'react';
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Footer(props) {
    return (
        <div className='footer'>
           <p className='f-text'>This is a website built during Lead 2.0 at BIT Mesra while i am still learning a lot of things.</p>
           <div className='icons'>
           <FaLinkedin className='fa-icons' />
           <FaGithub className='fa-icons'/>
           <MdMail className='fa-icons'/>
           </div>
           <p>© 2022 Pushkal Kishore</p>
        </div>
    );
}

export default Footer;