import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={Logo} alt='logo' />
        </div>
        {/*Used the ternary operator as shortcut for if/else statement
        essentially saying, if clicked, then show the nav-menu.active 
        style which dispays the nav-items in mobile view. Else, show 
        the regular nav-menu style*/}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'><a href='/'>Home</a></li>
            <li className='nav-item'><a href='/'>About</a></li>
            <li className='nav-item'><a href='/'>FAQ</a></li>
            <li className='nav-item'><a href='/'>Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {/*Used another ternary operator that essentially says, if the
            hamburger menu icon is clicked, then show the close menu icon.
            Else, show the hamburger menu.*/}
            {/*Added styling to react icons to increase size and change color*/}
            {click ? (<FaTimes size={30} style={{color: '#f8f8f8'}}/>) : (<FaBars size={30} style={{color: '#fff'}}/>)}
        </div>
    </nav>
  )
}

export default Navbar