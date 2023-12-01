import { signIn } from '../../redux_store/actions/authActions';
import style from "../../style.module.scss"

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Space,Divider, message, } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImGoogle } from "react-icons/im";

const Login = ({setIsLogin}) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 


  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState("")

  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };


  
  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = await dispatch(signIn(userInfo))
    //const data = fakeLogin()


    data ? message.success("Login success") : message.error("Incorrect login")



    if (data) {
        navigate('/my-profile/own-cards')
    }
  };

  /**
   * Myles request a fake login function
   */
  const fakeLogin = () =>{
  dispatch({
      type: 'CREATE_ACCOUNT_SUCCESS',
      payload: {
      email: 'admin@gmail.com',
      password: userInfo.password,
      username: "admin",
      }
  })
  dispatch({
      type: 'SIGN_IN_SUCCESS',
      payload: {
      message: "Login success",
      user: {
          role: "user",
          isEmailVerified: false,
          email: 'admin@gmail.com',
          username: "admin",
          id: '650ce9bdd8d81b6086ee0092',
      }
      },
      user: '650ce9bdd8d81b6086ee0092',
  })
  dispatch({
      type: 'SET_USER',
      payload: [{
      role: "user",
      isEmailVerified: false,
      email: 'admin@gmail.com',
      username: "admin",
      id: '650ce9bdd8d81b6086ee0092',
      }]
  })
  dispatch({
      type: 'UPDATE_USER',
      payload: {
      role: "user",
      isEmailVerified: false,
      email: 'admin@gmail.com',
      username: "admin",
      id: '650ce9bdd8d81b6086ee0092',
      }
  })
  navigate('/my-profile/own-cards')

  return "data!";
}


  return (
    <div className='w-full h-full flex items-center gap-5'>
      <div className='sm:flex hidden w-1/2 h-full flex-col justify-around border border-1'>
        <div className=' w-full px-12 flex flex-col gap-5'>
            <h1 className='text-center text-2xl font-bold tracking-widest'>Hello Friend !</h1>
            <div className='text-center text-md'>
              <p>Hello new friend!</p>
              <p>we are really exciting you guys join us!</p>
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
              onClick={() => {setIsLogin(false)}}
            >Join us</button>
          </motion.div>
        </div>

      </div>
      <form className='h-full w-full sm:w-1/2 flex flex-col justify-start md:justify-center gap-12 items-center'>
        <div className=''>
          <h1 className='text-center text-2xl font-bold tracking-widest'>Welcome Back !</h1>
        </div>
        <Space direction="vertical" size="large">
          
          <div className=''>
            <label className='font-mainPageFont tracking-wider'>Email</label>

            <input 
              name='email' 
              className={`${style.input} px-5 h-12 text-sm`} 
              type="text" 
              onChange={onChange} 
              placeholder='example@gmail.com'
            />
          </div>
          <div>
            <label className='tracking-wider'>Password</label>
            <input 
              name='password' 
              className={`${style.input} px-5 h-12 text-sm`} 
              type="password" 
              onChange={onChange}
            />
            <div>
              {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            </div>
            <div className='w-full flex justify-end'>
              <span className='text-sm underline mt-2 cursor-pointer'>Forgot password?</span>
            </div>
          </div>
          

          

          <div className='flex sm:hidden'>
            <p className='text-sm'>
              Dont have account? <span className='text-[#E4405F] cursor-pointer underline' onClick={() => {setIsLogin(false)}}>Join us</span>
            </p>
          </div>
          <motion.div 
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <button  
              className='w-full h-auto border border-1 rounded-md p-2 text-center'
              onClick={handleSignIn}>Log In</button>
          </motion.div>

          <Divider plain><span className='text-[#909090]'>Or Sign in with</span></Divider>
          <div className='flex justify-center'>
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.09 }}
              className='w-5 text-xl text-[#E4405F]'
            >
              <ImGoogle />
            </motion.div>
          </div>
        </Space>
      </form>
    </div>
  )
}

export default Login