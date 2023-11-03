import React from 'react'
import { motion } from 'framer-motion'

import { LoginForm,RegisterForm } from '../../components'


const LoginPage = () => {

  const [ isLogin, setIsLogin ] = React.useState(true)

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='relative w-full h-[800px] lg:w-[640px] xl:w-[800px] 2xl:w-[1000px] '>
        {
          isLogin && 
            <motion.div
              initial={{ x:1000, opacity: 0 }}
              animate={{ x:0, opacity: 1 }}
              exit={{ x:-1000, opacity: 0 }}
              className='w-full h-full shadow-signTable'
            >
              <LoginForm setIsLogin={setIsLogin}/>
            </motion.div>
        }
        {
          !isLogin &&
            <motion.div
              initial={{ x:-1000, opacity: 0 }}
              animate={{ x:0, opacity: 1 }}
              exit={{ x:1000, opacity: 0 }}
              className='w-full h-full shadow-signTable'
            >
              <RegisterForm setIsLogin={setIsLogin}>Register</RegisterForm>
            </motion.div>
        }
      </div>
    </div>
  )
}

export default LoginPage