import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import cont from '../assets/cont.svg'
import menu from '../assets/menu.png'
const Navbar = () => {
    const [ShowMenu,setShowMenu]=useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu"> 
            <Link activeClass='active' to='Intro' spy={true} smooth={true} offset={-73} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='About' spy={true} smooth={true} offset={-71} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-67} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>
    
            <Link activeClass='acti' to='Contact' spy={true} smooth={true} offset={-66} duration={500} className="desktopMenuBt">
                <img src={cont}alt="CVCCCC" className='desktopMenuImg'/><span className='spa'>Contact Me            </span>
            </Link>
    
                            
            {/* <button className="desktopMenuBtn" onClick={()=>{document.getElementById('Contact').scrollIntoView({behavior:'smooth'},{offset:-70})}}>
                </button> */}
            <img src={menu} alt="Logo" className='mobMenu' onClick={()=>setShowMenu(!ShowMenu)}/>
            <div className="navMenu" style={{display: ShowMenu? 'flex':'none'}}> 
            <Link activeClass='activ' to='Intro' spy={true} smooth={true} offset={-75} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='activ' to='About' spy={true} smooth={true} offset={-70} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='activ' to='Skills' spy={true} smooth={true} offset={-68} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='activ' to='Projects' spy={true} smooth={true} offset={-68} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='activ' to='Contact' spy={true} smooth={true} offset={-68} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>    
        </nav>
    )
}

export default Navbar
