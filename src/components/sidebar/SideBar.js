import React, {useState, useEffect} from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { axiosInstance } from './../../config';

const SideBar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get('/categories');
            setCats(res.data)
        }
        getCats();
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Siddarth_Instagram_220721_1200.jpg?itok=MC1gdj40" alt="" className="sidebarImg" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur autem debitis similique voluptas ratione repellat cum sint at quo fugiat.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className='link' key={c._id}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;