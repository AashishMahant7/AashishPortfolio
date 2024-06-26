import React, { useState } from 'react'
import './style.scss'
import Wrapper from '../wrapper/Wrapper'
import { MdOutlineMenu } from "react-icons/md";
import RightDrawer from './RightDrawer';
import MenuBox from '../MenuBox';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className='header' id='header'>
            <Wrapper>
                <nav className='navbar'>
                    <div className="logo pointer pointers">
                        <span>Aashish</span> Mahant <span></span>
                    </div>
                    {<MenuBox />}
                    <MdOutlineMenu className='toggle-menu pointers' onClick={() => setOpen(true)} />
                </nav>
                    <div className="mobile-drawer">
                        <RightDrawer open={open} setOpen={setOpen} />
                    </div>
            </Wrapper>
        </header>
    )
}

export default Navbar