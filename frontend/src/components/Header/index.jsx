import React from 'react'
import { NavLink,useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Navigation } from './../../constants';
import { useSelector } from 'react-redux';

const MobileHeader = () => {
  return (
    <div className='sm:hidden flex'>MobileHeader</div>
  )
}


const DesktopHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  const [active, setActive] = React.useState(path);
  const [scrolled, setScrolled] = React.useState(false);
  const isAuthenticated = useSelector(state => state.auth.isLoggedIn); //TODO: change to true when auth is implemented
  // debugger
  React.useEffect(() => {
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
                  {/* <UserNav />  */}
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