import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/test.png';
import './Header.css';


const Header = () => {
    return (
        <nav className='header'>
            
            <div className='flex '>
            <img src={logo} alt="" />
            <div>
                <p>Quiz for Web Developers</p>
            </div>
            </div>
            <div>
                <Link to ='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to ='/statistics'>Statistics</Link>
                <Link to ='/blog'>Blog</Link>
                
            </div>
            
        </nav>
    );
};

export default Header;