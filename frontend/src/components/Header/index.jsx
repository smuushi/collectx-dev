import { Navigation } from './../../constants';
import { dropdown } from '../../motion';
import { signOut } from '../../redux_store/actions/authActions';
import SearchBar from './../SearchBar/index';
import { useSelector,useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { NavLink,useLocation } from 'react-router-dom';
import { Drawer, message } from 'antd';
import { AiFillSetting,AiOutlineHeart,AiOutlineMenu,AiOutlineLogin } from "react-icons/ai";
import { GiCardBurn } from "react-icons/gi"
import { BsPersonVcard } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { StockOutlined } from "@ant-design/icons";




import { logout } from '../../redux_store/actions/authActions';

const userNav = [
  {
    name : "my cards",
    icon : <GiCardBurn />,
    url :  "/profile/own-cards"
  },
  {
    name : "Offer made",
    icon : <StockOutlined />,
    url : "/profile/offer-made"
  },
  {
    name : "Favorited",
    icon : <AiOutlineHeart />,
    url : "/profile/favorited"
  },
  {
    name : "Settings",
    icon : <AiFillSetting />,
    url : "/profile/setting"
  }
]

const MobileUserNav = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    message.success('Sign out successfully');
  }
  return(
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu />
      </div>
      <Drawer 
        title="User Menu" 
        placement="right" 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        width={window.innerWidth}
        >
        <div className='w-full flex flex-col justify-center gap-5'>
          {userNav.map((item,index) => {
            return(
              <NavLink
                onClick={() => setIsOpen(false)}
                to={item.url}
                key={index}
                className="w-full rounded-md relative overflow-hidden shadow-list">
                <div className="flex items-center gap-5 text-md justify-start px-4 py-3">
                  {item.icon}
                  <span><BsPersonVcard/> {item.name}</span>
                </div>
              </NavLink>
            )
          })}
          <hr />
          <NavLink
            to='/'
            onClick={handleSignOut}
            className="w-full rounded-md relative overflow-hidden shadow-list">
            <div className="flex items-center gap-5 text-md justify-start px-4 py-3">
              <FiLogOut />
              <span >Logout</span>
            </div>
          </NavLink>
        </div>
      </Drawer>

    </div>
  )
}

const MobileGuestNav = () => {
  if (useLocation().pathname !== "/login") {
    return (
      <NavLink
        to='/login'
        className="w-36 relative justify-self-start self-start flex justify-end ">
          <AiOutlineLogin className='text-2xl'/>
      </NavLink>
    )
  }
  return null;
}


const MobileHeader = () => {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn); //TODO: change to true when auth is implemented

  return (
    <div className='sm:hidden flex w-full justify-between items-center'>
      <NavLink to='/'>
        <p className='text-xl font-bold text-red-light'>Collect-X</p>
      </NavLink>
      
      {isAuthenticated ? <MobileUserNav /> : <MobileGuestNav />}
    </div>
  )
}


const UserNav = ({currentUser}) =>{
  const [ isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    
    const data = dispatch(signOut());
    //debugger
    if (data) {
        navigate('/')
    }
  }


  const liStyle = "rounded-lg hover:bg-slate-100 h-10 p-2 flex items-center cursor-pointer";

  return(
      <motion.nav 
          initial={false} 
          animate={isOpen ? "open" : "closed"} 
          className="flex flex-col items-start justify-start gap-1">
          
          <div className='w-36 xl:w-48 flex justify-end'>
            <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className= "w-auto flex justify-center items-center h-full rounded-full text-1xl bg-secondary px-4 py-2 hover:bg-tertiary cursor-pointer">
                    <span>{currentUser.username}</span>
                    {/* <img src={user.avatar} alt="profile" className="rounded-full w-5 h-5"/> */}
            </motion.button>
          </div>
          <motion.ul
            variants={dropdown.ulVariant}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="bg-white xl:w-48 flex flex-col gap-1 px-5 py-2 mt-5 border">
            {userNav.map((nav,index) => (
                <motion.li key={index} className={liStyle} variants={dropdown.itemVariant}>
                    <NavLink to={nav.url} className="flex gap-5"  onClick={()=>setIsOpen(false)}>
                        <p>{nav.icon}</p>
                        <span className="text-sm font-semibold">{nav.name}</span>
                    </NavLink>
                </motion.li>
            ))}
            <hr />
            <motion.li className={liStyle} variants={dropdown.itemVariant}>
              <NavLink 
                  to="/" 
                  className="flex gap-5"
                  onClick={handleSignOut}>
                  <p><FiLogOut /></p>
                  <span className="text-sm font-semibold">Logout</span>
              </NavLink>
            </motion.li>
        </motion.ul>
      </motion.nav>
  )
}



const DesktopHeader = () => {
  const location = useLocation();
  const path = location.pathname;

  const [active, setActive] = React.useState(path);
  const [scrolled, setScrolled] = React.useState(false);
  // debugger

  
  //User
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn); //TODO: change to true when auth is implemented

  const dispatch = useDispatch();

  const authStatus = useSelector(state => state.auth)
  console.log(authStatus)
  const allUsers = useSelector(state => state.users)
  const currentUser = allUsers[authStatus.currentUser]

  // debugger

    useEffect(() => {
      setActive(path); // Update active path when path changes
      // Handle scroll
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [path]);

  // logout
    const logoutClick = (e) => {
      e.preventDefault();
      dispatch(logout());
    }
  return (

    <nav className='sm:flex hidden fiexed top-0 w-full z-30'>
      <div className='w-full flex justify-between items-center mx-auto'>
        <div className='flex items-center'>
          <NavLink to={'/'} className='text-2xl font-bold text-red-light'>
            <motion.div whileHover={{scale:1.1}}>
              Collect-X
            </motion.div>
          </NavLink>
          
          {path !== '/login' && path !== '/register' && path !== '/postcard' &&(
            Navigation.map((item, index) => {
              return (
                <NavLink 
                  key={index} 
                  to={item.link} 
                  className={`${active === item.link ? "text-primary" : "text-tertiary"} 
                  text-xl font-bold hover:text-black ml-8`}>
                  {item.name}
                </NavLink>
              )
            })
          )}
        </div>
        <div className='flex'>
          {path !== '/login' && path !== '/register' && path !== '/postcard' &&(
            <>
              <motion.div 
              className="rounded-full text-sm bg-black text-white font-bold px-8 py-3 cursor-pointer hover:bg-tertiary hover:text-black ease-linear duration-150">
              <NavLink to="/postcard">
                  Post My Card
              </NavLink>
            </motion.div>

            {isAuthenticated ? 
              <div className="w-36 relative justify-self-start self-start">
                  <div className=" w-20 rounded-full text-1xl bg-secondary px-4 py-2 hover:bg-tertiary cursor-pointer">
                      <span onClick={logoutClick}>Logout</span>
                  </div>
              </div>
              : 
              <NavLink
                to='/login'
                className="w-36 relative justify-self-start self-start flex justify-end ">
                  <div className=" w-20 rounded-full text-1xl bg-secondary px-4 py-2 hover:bg-tertiary cursor-pointer">
                      <span >Log in</span>
                  </div>
              </NavLink>  
            }
            </>
          )}
        </div>

      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  )
}

export default Header 