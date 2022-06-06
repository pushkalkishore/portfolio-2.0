import React from 'react';
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Footer(props) {
    return (
        <div className='footer'>
           <p className='f-text'>This is a website built during Lead 2.0 at BIT Mesra while i am still learning a lot of things.</p>
           <div className='icons'>
           <a href='https://www.linkedin.com/in/kishorepushkal' target="_blank" className='links'><FaLinkedin className='fa-icons'/></a>
           <a href='https://github.com/pushkalkishore' target="_blank" className='links'><FaGithub className='fa-icons'/></a>
           <a href='mailto:kpushkal122@gmail.com' className='links'><MdMail className='fa-icons'/></a>
           </div>
           <p>© 2022 Pushkal Kishore</p>
        </div>
    );
}

export default Footer;