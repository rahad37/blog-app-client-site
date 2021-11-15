import React, {useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Context } from './../../context/Context';
import axios from 'axios';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: 'LOGIN_START'});
        try{
            const res = await axios.post('https://my-bloggin-app.herokuapp.com/api/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            });
            dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
        }catch(err){
            dispatch({type: 'LOGIN_FAILURE'});
        }
    }
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
           <form className="loginForm" onSubmit={handleSubmit}>
               <label>Username</label>
               <input type="text" className='loginInput' placeholder='Enter Your Username' ref={userRef}/>
               <label>Password</label>
               <input type="password" className='loginInput' placeholder='Enter Your Password' ref={passwordRef} />
               <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
           </form>
           <Link to='/register' className='link'>
                <button className="loginRegister">Register</button>
           </Link>
        </div>
    );
};

export default Login;