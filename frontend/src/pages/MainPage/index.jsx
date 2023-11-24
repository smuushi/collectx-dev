import { pageSettings } from './../../constants/style';
import { database_product_info } from "../../constants"
import style from '../../style.module.scss'
import { img_id23 } from '../../assets';
import { ProductCard,SearchBar } from '../../components';
import { fetchCards } from '../../redux_store/actions/cardActions';

import { motion } from 'framer-motion';
import { Carousel,Space } from 'antd';
import {ArrowRightOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { 
  useDispatch,
  useSelector,
} from 'react-redux';


const CarouselComponent = () => {
  const tag = [
    "Pokemon",
    "Football",
    "Yu-Gi-Oh",
  ]
  
  return (
    <div className="hidden md:flex">

      <div className='h-auto md:h-[700px] 2xl:h-[1000px] flex items-center'>
        <div className='mt-[-100px] flex flex-col gap-10 w-full'>
          <h1 className='text-white text-4xl font-bold'>Finding your Extreme card here</h1>
          <div className='w-full h-16'>
            <SearchBar color="text-white"/>
          </div>
          <div className='hidden md:flex gap-5'>
            <p className=" text-white text-[1rem] font-semibold">Popular Tags: </p>
            <div className='flex justify-center items-center gap-3 '>
                {tag.map((item,index) => (
                  <NavLink 
                    to={`/search/?search=${item}`}
                    key={index} 
                    className="border rounded-[10px] px-3 py-1 text-[0.8rem] font-semibold text-white hover:bg-white hover:text-black select-none cursor-pointer duration-150">
                    {item}
                  </NavLink>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Carousel 
        effect="fade" 
        autoplay 
        dots={false}
        style={{
            width:"100%",
            height:"100%",
            position:"absolute",
            top:0,
            left:0,
            zIndex:-1
        }}>
          
        <div>
            <div className=" bg-green h-auto md:h-[700px] 2xl:h-[1000px] flex justify-end items-center md:px-64 3xl:px-96">
              <motion.div
                className='w-96 hidden md:flex'
                initial={{ x: 0 }}
                animate={{ 
                    x:0,
                    rotateY: 360 
                  }}
                transition={{
                    duration: 2, 
                    repeat: 1, 
                  }}>
                <motion.img src={img_id23} alt="img" className="rotate-12 object-contain scale-75" />
              </motion.div>
            </div>
        </div>

        <div>
            <div className=" bg-accent h-auto md:h-[700px] 2xl:h-[1000px] flex justify-end items-center px-96">
              
            </div>
        </div>
      </Carousel>
    </div>
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
          <div className="flex flex-wrap justify-start gap-3 md:gap-8 2xl:gap-16">
              {list.map((product,index) => 
                <div key={index} className="w-24 md:w-64 2xl:w-96">
                  <ProductCard product={product}/>
                </div>
              )}
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

  //TODO: After login, we can recommend the product to user
  // let authStatus = useSelector(state => state.auth)
  // let allUsers = useSelector(state => state.users)
  // let currentUser = allUsers[authStatus.currentUser]
  const dispatch = useDispatch(); 
  dispatch(fetchCards())
  const cardStatus = useSelector(state => state.cards.status)
  console.log(cardStatus)
  

  return (
    <div className={`relative h-auto w-full ${pageSettings.padding} flex flex-col gap-16`}>
        <CarouselComponent />

        <ProductList name="Recently Viewed & More " list={database_product_info.slice(0, 5)} />
        <ProductList name="You might interest..." list={database_product_info.slice(6, 13)} />
        <div className='w-full bg-[#FAF1E4] scroll-py-16'>
          test
        </div>
    </div>


  )
}

export default MainPage