import React, { useState, useContext } from 'react';
import './settings.css';
import SideBar from './../../components/sidebar/SideBar';
import { Context } from './../../context/Context';
import axios from 'axios';

const Settings = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);

    const PF = process.env.BACKEND_URL +'/images/';

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_START'})
        const updateUser = {
           userId: user._id, 
           username,
           email,
           password
        }
        if(file){
            const data= new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updateUser.profilePic = filename;

            try{
                await axios.post('/upload', data);
                
            }catch(err){}
        }
        try{
            const res = await axios.put('/users/' + user._id, updateUser);
            setSuccess(true);
            dispatch({type: 'UPDATE_SUCCESS', payload: res.data});           
        }catch(err){
            dispatch({type: 'UPDATE_FAILURE'});
        }
    }

    return (
        <div className='settings'>
          <div className="settingsWrapper">
              <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Your Account</span>
                  <span className="settingsDeleteTitle">Delete Account</span>
              </div>
              <form className="settingsForm" onSubmit={handleSubmit}>
                  <label>Profile Picture</label>
                  <div className="settingsPP">
                      <img src={file ? URL.createObjectURL(file) : PF+user.data?.profilePic} alt="" />
                      <label htmlFor="fileInput">
                          <i className="settingsPPIcon far fa-user-circle"></i>
                      </label>
                      <input type="file" id='fileInput' style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                  </div>
                      <label>Username</label>
                      <input type="text" placeholder='Write Your Username' onChange={(e) => setUsername(e.target.value)} />
                      <label>Email</label>
                      <input type="email" placeholder='Write Your Email' onChange={e => setEmail(e.target.value)}/>
                      <label>Password</label>
                      <input type="password" placeholder='Write Your Password' onChange={(e) => setPassword(e.target.value)}/>
                      <button className="settingsSubmit" type='submit'>Update</button>
                      {success && (<span style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>Profile has been updated successfully!</span>)}
              </form>
          </div>
          <SideBar />
        </div>
    );
};

export default Settings;