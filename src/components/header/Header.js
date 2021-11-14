import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://wallpaperaccess.com/full/2817799.jpg" alt="" className="headerImg" />
        </div>
    );
};

export default Header;