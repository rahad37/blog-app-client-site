import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';
import { Context } from './../../context/Context';

const TopBar = () => {
    const {user, dispatch} = useContext(Context);
    const PF = "https://my-bloggin-app.herokuapp.com/images/";

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'})
    }
    return (
        <div className='topbar'>
           <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
           </div>
           <div className="topCenter">
               <ul className="topList">
                   <li className="topListItem">
                       <Link to='/' className='link'>HOME</Link>
                   </li>
                   <li className="topListItem"><Link to='/about' className='link'>ABOUT</Link></li>
                   <li className="topListItem"><Link to='/contact' className='link'>CONTACT</Link></li>
                   <li className="topListItem"><Link to='/write' className='link'>WRITE</Link></li>
                   <li className="topListItem" onClick={handleLogout}>
                       {user && "LOGOUT"}
                   </li>
               </ul>
           </div>
          
           <div className="topRight">
               
               {user ? (
                   <Link to='/settings' className='link'>
                        <img src={PF+user?.profilePic} alt="" className="topImg" />
                   </Link>               
               ) : (
               <ul className="topList">
                   <li className="topListItem">
                        <Link to='/login' className='link'>LOGIN</Link>
                   </li>
                   <li className="topListItem">
                        <Link to='/register' className='link'>REGISTER</Link>
                   </li>
               </ul>
               )}
               <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    );
};

export default TopBar;

