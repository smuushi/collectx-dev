import { pageSettings } from './../../constants/style';
import { database_product_info } from "../../constants"
import style from '../../style.module.scss'

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




const ProductList = ({name,list}) =>{

  const MobileCard = ({id, productName, productImg,category}) => (
    <NavLink 
      to={`/asset/${id}`} 
      className="relative h-auto w-[40%] md:w-full 
      shadow-product flex-shrink-0 hover:cursor-pointer will-change-transform ">
        <motion.div whileHover={{scale : 1.1}}>
            <img className="object-contain hover:object-scale-down" src={productImg[0]} alt="img" />
        </motion.div>
        <div className="w-full p-2 z-10 bg-white">
            <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{productName}</p>
            <p className="text-sm font-medium" >{category}</p>
        </div>
    </NavLink>
  )
  
  const PCard = ({id, productName, productImg,category}) =>(
        <NavLink to={`/asset/${id}`} className="sm:h-64 sm:w-48 h-32 w-[40%] rounded-xl shadow-card flex flex-col overflow-hidden ">
            <motion.div whileHover={{scale : 1.1}}>
                <img className="object-contain hover:object-scale-down" src={productImg[0]} alt="img" />
            </motion.div>
            <div className="w-full p-2 z-10 bg-white">
                <p className="w-full text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{productName}</p>
                <p className="text-sm font-medium" >{category}</p>
            </div>
        </NavLink>
  )

  const MobileList = ({list}) =>(
      <div className="block md:hidden">
          <div className="px-[20px] pb-[20px] flex flex-row items-center flex-nowrap gap-[20px] overflow-scroll">
              {list.map((product,index) => <MobileCard key={index} id={product.id} productName={product.name} productImg={product.img} category={product.tag.Category}/>)}
          </div>
      </div>
  )
  
  /**
   * TODO: Redesign the PCList
   */
  const PCList = ({list}) =>(
      <div className="hidden md:block">
          <div className="flex justify-start gap-24">
              {list.map((product,index) => <PCard key={index} id={product.id} productName={product.name} productImg={product.img} category={product.tag.Category}/>)}
          </div>
      </div>
  )

  return(
      <div className="relative h-[250px] sm:h-[500px] md:h-auto sm:mb-24 mb-12">
          <div className="absolute md:relative h-auto w-screen md:w-full top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 flex flex-col gap-7">
          <div className='flex gap-5 md:gap-16 items-center'>
            <h1 className='px-6 md:px-0 font-bold text-md md:text-xl'>{name}</h1>
            <NavLink to='/browse' className='flex items-center gap-2 cursor-pointer text-sm md:text-md'>
              <span>See all&nbsp;</span>
              <ArrowRightOutlined />
            </NavLink>
          </div>
          <div className="">
              <MobileList list={list}/>
              <PCList list={list} />
          </div>
      </div>
  </div>
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
        <ProductList name="Your Recently Viewed Items" list={database_product_info.slice(0, 5)} />
        <ProductList name="Your watched items" list={database_product_info.slice(6, 10)} />
        <ProductList name="You might interest..." list={database_product_info.slice(11, 13)} />
      </Space>
      
    </div>

  )
}

export default MainPage