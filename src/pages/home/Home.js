import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';
import Posts from './../../components/posts/Posts';
import './home.css';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() =>{
        const fetchPosts = async () => {
           const res = await axios.get('/posts' + search);
           setPosts(res.data)
        }
        fetchPosts();
    }, [search])
    return (
        <div>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <SideBar />
            </div>
        </div>
    );
};

export default Home;