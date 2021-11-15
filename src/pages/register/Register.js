import React, {useState} from 'react';
import './register.css';
import { Link } from 'react-router-dom';
// import { axiosInstance } from './../../config';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post('https://my-bloggin-app.herokuapp.com/api/auth/register', {
                username, email, password
            });
            res.data && window.location.replace('/login');
        }catch(err){
            setError(true);
        }
       
    }

    return (
        <div className='register'>
            <span className="loginTitle">Register</span>
           <form className="registerForm" onSubmit={handleSubmit}>
               <label>Username</label>
               <input type="text" className='registerInput' placeholder='Enter Your Username' onChange={e => setUsername(e.target.value)} />
               <label>Email</label>
               <input type="text" className='registerInput' placeholder='Enter Your Email' onChange={e => setEmail(e.target.value)} />
               <label>Password</label>
               <input type="password" className='registerInput' placeholder='Enter Your Password' onChange={e => setPassword(e.target.value)} />
               <button className="registerButton" type='submit'>Register</button>
               {error && <span style={{color: 'tomato', marginTop: '10px'}}>User is already register. Please Login!</span>}
           </form>
           <Link to='/login' className='link'>
                <button className="registerLoginButton">Login</button>
           </Link>
        </div>
    );
};

export default Register;