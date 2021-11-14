import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const PF = process.env.BACKEND_URL + '/images/';
    return (
        <div className='post'>
            {post.photo && 
           <img src={PF + post.photo} alt="" className="postImg" />}
           <div className="postInfo">
               <div className="postCats">
                    {post.categories.map((c) => (
                    <div className="postCat">{c.name}</div>
                   ))}
               </div>
               <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">{post.title}</span>
               </Link>
               <hr />
               <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
           </div>
           <p className='postDesc'>{post.desc}</p>

        </div>
    );
};

export default Post;