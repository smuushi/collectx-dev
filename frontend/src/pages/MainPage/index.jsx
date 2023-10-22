import { pageSettings } from './../../constants/style';
import { database_product_info } from "../../constants"

import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Carousel,Space } from 'antd';
import {ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const CarouselComponent = () => {
  const contentStyle= {
    margin: 0,
    height: '320px',
    color: '#f0f0f0',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };


  return (
    <Carousel
      autoplay
    >
      <div>
        <h3 style={contentStyle}>advertisment 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>advertisment 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>advertisment 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>advertisment 4</h3>
      </div>
    </Carousel>
  )
}



const Card = ({id, productName, productImg,category}) =>{
  return(
      <NavLink to={`/asset/${id}`} className="sm:h-64 sm:w-48 h-32 w-24 rounded-xl shadow-card flex flex-col overflow-hidden ">
          <motion.div whileHover={{scale : 1.1}}>
              <img className="object-contain hover:object-scale-down" src={productImg[0]} alt="img" />
          </motion.div>
          <div className="w-full p-2 z-10 bg-white">
              <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{productName}</p>
              <p className="text-sm font-medium" >{category}</p>
          </div>
      </NavLink>
  )
}

const MainPage = () => {

  // let authStatus = useSelector(state => state.auth)
  // let allUsers = useSelector(state => state.users)
  // let currentUser = allUsers[authStatus.currentUser]
  
  // console.log(authStatus.isLoggedIn)
  return (
    <div className={`${pageSettings.padding}`}>
      <Space 
        direction="vertical"
        size="large"
        style={{
          display: 'flex',
        }}>
        <div className='w-full'>

        </div>
        <div className='w-full flex justify-center'>
          <div className='h-12 w-2/3'>
            
          </div>
        </div>

        <CarouselComponent />
        <div className='relative w-full'>
          <div className='flex gap-5 md:gap-16 items-center'>
            <h1 className='font-bold text-md md:text-xl'>Your Recently Viewed Items</h1>
            <NavLink to='/browse' className='flex items-center gap-2 cursor-pointer text-sm md:text-md'>
              <span>See all&nbsp;</span>
              <ArrowRightOutlined />
            </NavLink>
          </div>
          <div className=" w-full sm:py-6 py-3 px-6 flex flex-nowrap md:flex-wrap gap-6 md:gap-16 overflow-scroll md:overflow-auto">
              {database_product_info.slice(0, 7).map((product,index) =>(
                  <Card key={index} id={product.id} productName={product.name} productImg={product.img} category={product.tag.Category}/>
              ))}
          </div>
        </div>

        <div className='relative w-full'>
          <div className='flex gap-5 md:gap-16 items-center'>
            <h1 className='font-bold text-md md:text-xl'>Your watched items</h1>
            <NavLink to='/browse' className='flex items-center gap-2 cursor-pointer text-sm md:text-md'>
              <span>See all&nbsp;</span>
              <ArrowRightOutlined />
            </NavLink>
          </div>
          <div 
              className="w-full sm:py-6 py-3 px-6  flex flex-wrap gap-16">
              {database_product_info.slice(6, 11).map((product,index) =>(
                  <Card key={index} id={product.id} productName={product.name} productImg={product.img} category={product.tag.Category}/>
              ))}
          </div>
        </div>

        <div className='relative w-full'>
          <div className='flex gap-5 md:gap-16 items-center'>
            <h1 className='font-bold text-md md:text-xl'>You might interest...</h1>
            <NavLink to='/browse' className='flex items-center gap-2 cursor-pointer text-sm md:text-md'>
              <span>See all&nbsp;</span>
              <ArrowRightOutlined />
            </NavLink>
          </div>
          <div 
              className="w-full sm:py-6 py-3 px-6  flex flex-wrap gap-16">
              {database_product_info.slice(6, 11).map((product,index) =>(
                  <Card key={index} id={product.id} productName={product.name} productImg={product.img} category={product.tag.Category}/>
              ))}
          </div>
        </div>
      </Space>
      
    </div>

  )
}

export default MainPage