import React from 'react'
import './style.scss';
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

function Social() {
    return (
        <div className='social-group'>
            <a href='https://github.com/AashishMahant7' target='_blank' className="social-circle pointers">
                <GrGithub />
            </a>
            <a href='https://in.linkedin.com/in/aashish-m-b6104625b' target='_blank' className="social-circle pointers">
                <GrLinkedinOption />
            </a>
            <a href='mailto:aashishmahant15102002@gmail.com' target='_blank' className="social-circle pointers">
                <GrMail />
            </a>
            <a href='https://api.whatsapp.com/send?phone=919315339040' target='_blank' className="social-circle pointers">
                <FaWhatsapp />
            </a>
        </div>
    )
}

export default Social