import style from "../../style.module.scss"
import { signIn, createAccount } from '../../redux_store/actions/authActions';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Space,Divider } from 'antd';
import { ImGoogle } from "react-icons/im";



const Register = ({setIsLogin}) => {

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [errorMessage, setErrorMessage] = useState({
    username: '',
    password: '',
    email: '',
  })
  
  const dispatch = useDispatch();
  const { isLoggedIn, message, currentUser } = useSelector(state => state.auth);
  const navigate = useNavigate(); 

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault()
    dispatch(createAccount(userInfo));
  };

  const handleSignIn = () => {
    console.log(userInfo)
    const data = dispatch(signIn(userInfo));

    if (data) {
      
      navigate('/profile')
    }
  };


  return (
    <div className='w-full h-full flex items-center gap-5'>
      <form className='h-full w-full sm:w-1/2 flex flex-col justify-center gap-12 items-center'>
        <div className=''>
          <h1 className='text-center text-2xl font-bold tracking-widest'>Join us!</h1>
        </div>
        <Space direction="vertical" size="large">
          <div className=''>
            <label className='font-mainPageFont tracking-wider'>Username</label>
            <input className={`${style.input} px-5 h-12`} name='username' type="text" onChange={onChange}/>
            {errorMessage.username && <p className='text-red-500'>{errorMessage.username}</p>}
          </div>
          <div>
            <label className='tracking-wider'>Password</label>
            <input className={`${style.input} px-5 h-12`} name='password' type="password" onChange={onChange}/>
            {errorMessage.password && <p className='text-red-500'>{errorMessage.password}</p>}
          </div>
          {/* <div>
            <label className='tracking-wider'>Confirm Password</label>
            <input className='px-5' name='ConfirmPassword' type="password" onChange={onChange}/>
            {errorMessage.ConfirmPassword && <p className='text-red-500'>{errorMessage.ConfirmPassword}</p>}  
          </div> */}
          <div>
            <label className='tracking-wider'>Contact Email</label>
            <input className={`${style.input} px-5 h-12`} name='email' type="email" onChange={onChange}/>
            {errorMessage.email && <p className='text-red-500'>{errorMessage.email}</p>}
          </div>
          <div className='flex sm:hidden'>
            <p className='text-sm'>
              Already have account? <span className='text-[#E4405F] cursor-pointer underline' onClick={() => {setIsLogin(true)}}>Login</span>
            </p>
          </div>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <button  
              className='w-full h-auto border border-1 rounded-md p-2 text-center'
              onClick={handleCreateAccount}>Sign up</button>
          </motion.div>

          <Divider plain>Or</Divider>
          <div className='flex justify-center'>
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className='w-5 text-xl text-[#E4405F] cursor-pointer'
            >
              <ImGoogle />
            </motion.div>
          </div>
        </Space>
      </form>

      <div className='sm:flex hidden w-1/2 h-full flex-col justify-around border border-1'>
        <div className='w-full px-12 flex flex-col gap-5'>
            <h1 className='text-center text-2xl font-bold tracking-widest'>Wecome back!</h1>
            <div className='text-center text-md'>
              <p>Great to see you again! Let's get you signed in and on your way. hoping you've been doing well since your last visit !</p>
            </div>
        </div>

        <div className='w-full px-12 flex flex-col'>
          <motion.div 
            className='h-auto rounded-md text-center'
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            >
            <button 
              className="w-full h-auto border border-1 rounded-md p-2 text-center" 
              onClick={() => {setIsLogin(true)}}
            >Sign In here</button>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Register