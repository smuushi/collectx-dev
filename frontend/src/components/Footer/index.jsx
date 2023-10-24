import { pageSettings } from '../../constants/style'

import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {

  const footerStyle = {
    title : "text-2xl font-bold text-white border-b-2 border-[#e91e63]"
  }

  const companyul = [
    {
      name: "About Us",
      link: "#"
    },
    {
      name: "Our Services",
      link: "#"
    },
    {
      name: "Privacy Policy",
      link: "#"
    },
  ]

  const getHelpul = [
    {
      name: "FAQ",
      link: "#"
    },
    {
      name: "Shipping policy",
      link: "#"
    },
    {
      name: "Vault card Policy",
      link: "#"
    },
    {
      name: "Payment Options",
      link: "#"
    }
  ]

  const followUsul = [
    {
      name: "Facebook",
      icon: <AiFillFacebook />,
      link: "#"
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram />,
      link: "#"
    },
    {
      name: "Twitter",
      icon: <AiFillTwitterCircle />,
      link: "#"
    },
    {
      name: "Youtube",
      icon: <AiFillYoutube />,
      link: "#"
    }
  ]
  

  return (
    <div className={`${pageSettings.padding} w-full flex flex-col md:flex-row justify-start gap-8 md:gap-96 py-8 md:py-32 `} >
      <div className='flex flex-col gap-6'>
        <h2 className={footerStyle.title}>Company</h2>
        <div className="text-white flex flex-col gap-5">
          {companyul.map((item, index) => (
            <NavLink key={index} to={item.link} className="">
              <motion.div 
                whileHover={{ x : 5, transition: { duration: 0.2 }}}
                whileTap={{ scale: 0.9 }}>
                {item.name}
              </motion.div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className={footerStyle.title}>Get Help</h2>
        <div className="text-white flex flex-col gap-5">
          {getHelpul.map((item, index) => (
            <NavLink key={index} to={item.link} className="">
            <motion.div 
              whileHover={{ x : 5, transition: { duration: 0.2 }}}
              whileTap={{ scale: 0.9 }}>
              {item.name}
            </motion.div>
          </NavLink>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className={footerStyle.title}>Follow us</h2>
        <div className="text-white flex flex-col gap-5">
          {followUsul.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className="flex items-center gap-2">
              <motion.div
                whileHover={{ x : 5,transition: { duration: 0.2 }}}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </motion.div>
              
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer