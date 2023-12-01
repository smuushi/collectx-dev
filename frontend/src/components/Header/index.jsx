import { Navigation } from './../../constants';
import { dropdown } from '../../motion';
import { signOut } from '../../redux_store/actions/authActions';
import SearchBar from '../SearchBar/index';
import { category } from '../../constants';
import style from "../../style.module.scss"

import { useSelector,useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'
import { NavLink,useLocation } from 'react-router-dom';
import { Drawer, message } from 'antd';
import { AiFillSetting,AiOutlineHeart,AiOutlineMenu,AiOutlineLogin } from "react-icons/ai";
import { GiCardBurn } from "react-icons/gi"
import { BsPersonVcard } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import { StockOutlined,MessageOutlined } from "@ant-design/icons";




import { pageSettings } from './../../constants/style';

const userNav = [
  {
    name : "my cards",
    icon : <GiCardBurn />,
    url :  "/my-profile/own-cards"
  },
  {
    name : "Offer made",
    icon : <StockOutlined />,
    url : "/my-profile/offer-made"
  },
  {
    name : "Favorited",
    icon : <AiOutlineHeart />,
    url : "/my-profile/favorited"
  },
  {
    name : "Messages",
    icon : <MessageOutlined />,
    url : "/my-profile/messages"
  },
  {
    name : "Settings",
    icon : <AiFillSetting />,
    url : "/my-profile/setting"
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
                  <span> {item.name}</span>
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
        className=" relative justify-self-start flex justify-end ">
          <AiOutlineLogin className='text-2xl'/>
      </NavLink>
    )
  }
  return null;
}

const MobileHeader = () => {
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn); //TODO: change to true when auth is implemented

  return (
    <div className={`${pageSettings.padding} ${style.glassmorphism} py-6 sm:hidden fixed top-0 z-10 flex w-full justify-between items-center`}>
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
          className="flex flex-col items-start justify-start gap-1 ">
          
          <div className='w-36 xl:w-48 flex justify-end'>
            <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
                className= "w-auto flex justify-center items-center h-full rounded-md text-1xl border  px-4 py-2 cursor-pointer">
                    <span>{currentUser.username}</span>
                    {/* <img src={user.avatar} alt="profile" className="rounded-full w-5 h-5"/> */}
            </motion.button>
          </div>
          <motion.ul
            variants={dropdown.ulVariant}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="bg-white xl:w-48 flex flex-col gap-1 px-5 py-2 mt-5 border ">
            {userNav.map((nav,index) => (
                <motion.li key={index} className={liStyle} variants={dropdown.itemVariant}>
                    <NavLink to={nav.url} className="flex gap-5"  onClick={()=>setIsOpen(false)}>
                        <p className='text-black'>{nav.icon}</p>
                        <span className="text-sm font-semibold text-black">{nav.name}</span>
                    </NavLink>
                </motion.li>
            ))}
            <hr />
            <motion.li className={liStyle} variants={dropdown.itemVariant}>
              <NavLink 
                  to="/" 
                  className="flex gap-5"
                  onClick={handleSignOut}>
                  <p className='text-black'><FiLogOut /></p>
                  <span className="text-black text-sm font-semibold">Logout</span>
              </NavLink>
            </motion.li>
        </motion.ul>
      </motion.nav>
  )
}



const DesktopHeader = () => {

  const location = useLocation(); //get the path
  const path = location.pathname;

  const [ headerStyle, setHeaderStyle ] = useState("bg-none text-white");
  const [ currentPath, setCurrentPath ] = useState(path); //set the active path
  const [ showSearch, setShowSearch ] = useState(false); //set the active path
  const [ showCategory, setShowCategory ] = useState(false); //set the active path
  /**
   * Listen to the scroll event
   */
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderStyle('bg-white text-black'); 
    } else {
      setHeaderStyle('bg-none text-white');
    }

    if( window.scrollY > 100){
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }

    if (window.scrollY > 200){
      setShowCategory(true)
    } else {
      setShowCategory(false)
    }

  };

  /**
   * Add event listener when component mounts
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setCurrentPath(path); // Update active path when path changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [path]);

  //User
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn); //TODO: change to true when auth is implemented
  const authStatus = useSelector(state => state.auth)
  const allUsers = useSelector(state => state.users)
  const currentUser = allUsers[authStatus.currentUser]

  //Showing LOGO
  const LOGO = () => (
    <NavLink to={'/'} className='text-2xl font-bold'>
      <motion.div 
        whileHover={{scale:1.1}}
        className={currentPath !== '/login' ? "" : "text-black"}
        >Collect-X</motion.div>
    </NavLink>
  )

  //Showing Navigation Bar
  const NavigationBar = () => (
    <nav className="flex gap-10 items-center text-lg tracking-wide font-sans">
      <NavLink to="/vaultMyCard" className="">Vault my Cards</NavLink>
      {isAuthenticated ?
        <div className="h-12 relative justify-self-start self-start">
        <UserNav currentUser={currentUser}/> 
      </div>
      : 
      <NavLink
        to='/login'
        className="w-auto flex justify-center items-center h-full rounded-md text-1xl px-4 py-3 border cursor-pointer">
        <span >Log in / Sign up</span>
      </NavLink> 
      }
    </nav>
  )

  //If we are on the home page
  if(currentPath === '/'){
    return(
      <header className={`z-10 fixed top-0 left-0 w-full py-7 hidden md:flex flex-col duration-500 ${headerStyle}`} >
        <div className={` ${pageSettings.padding} w-full flex items-center justify-between gap-10`}>
          <LOGO/>
          {showSearch && (
            <div className='flex-1 h-12 text-black'><SearchBar /></div>
          )}
          <NavigationBar/>
        </div>
        {showCategory && (
          <motion.div 
            initial={{ opacity: 0 , y:-25 }}
            animate={{ opacity: 1 , y:0   }}
            exit={{ opacity: 0 , y:-25 }}
            transition={{ ease: 'linear'}}
            className='w-full mt-5'>
          
            <hr />
            <div className={`${pageSettings.padding} mt-5 flex justify-around `}>
              {category.map((cat,index) => (
                <NavLink to={`/search/?search=${cat.name}`} key={index}>
                    <h3 className='text-md tracking-wide font-semibold select-none cursor-pointer'>{cat.name}</h3>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
        
      </header>
    )
  }

  //If we are on the login page
  if(currentPath === '/login'){
    return(
      <header className={`z-10 fixed top-0 left-0 w-full py-7 hidden md:flex flex-col duration-500 ${headerStyle}`} >
        <div className={` ${pageSettings.padding} w-full flex items-center justify-between gap-10`}>
          <LOGO/>
        </div>
      </header>
    )
  }

  //If we are on the other pages
  return(
    <header className={`z-10 fixed top-0 left-0 w-full py-7 hidden md:flex flex-col duration-500 bg-white`} >
      <div className={` ${pageSettings.padding} w-full flex items-center justify-between gap-10`}>
        <LOGO/>
          <>
            <div className='flex-1 h-12 text-black'>
              <SearchBar />
            </div>
            <NavigationBar/>
          </>
      </div>
      <motion.div 
        initial={{ opacity: 0 , y:-25 }}
        animate={{ opacity: 1 , y:0   }}
        exit={{ opacity: 0 , y:-25 }}
        transition={{ ease: 'linear'}}
        className='w-full mt-5'>
      
        <hr />
        <div className={`${pageSettings.padding} mt-5 flex justify-around `}>
          {category.map((cat,index) => (
            <NavLink to={`/search/?search=${cat.name}`} key={index}>
                <h3 className='text-md tracking-wide font-semibold select-none cursor-pointer'>{cat.name}</h3>
            </NavLink>
          ))}
        </div>
      </motion.div>
    </header>
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