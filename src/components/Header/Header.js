import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/test.png';

//7.create a link so that you can go to this route
//8.create a component  to add what  you will  show  once  you  go to the route
//9.add route so that  react router  know  the component it needs to  display while you visiting to the route

const Header = () => {
    return (

        <div className="navbar bg-sky-300">
            <div className="flex-1">
                <div>
                <img className='w-8' src={logo} alt="" />
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">Quiz for Web Developers</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/topics'>Home</Link></li>
                    <li><Link to='/topics'>Topics</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
























        // <nav className='header'>

        //     <div className='flex '>
        //     <img src={logo} alt="" />
        //     <div>
        //         <p>Quiz for Web Developers</p>
        //     </div>
        //     </div>
        //     <div>
        //         <Link to ='/'>Home</Link>
        //         <Link to='/topics'>Topics</Link>
        //         <Link to ='/statistics'>Statistics</Link>
        //         <Link to ='/blog'>Blog</Link>

        //     </div>

        // </nav>
    );
};

export default Header;