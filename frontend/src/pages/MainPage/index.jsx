//Style
import { pageSettings } from './../../constants/style';
import style from '../../style.module.scss'

//Simulation Data
import { database_product_info } from "../../constants"
import { 
  pic1,pic3,pic5, //pokemon
  pic11,pic13,pic15, //basketball
  pic31,pic33,pic35, pic2, //baseball
} from '../../assets';

//Components
import { ProductCard,SearchBar } from '../../components';

//Redux
import { fetchCards } from '../../redux_store/actions/cardActions';
import { useDispatch, useSelector } from 'react-redux';

//Framer Motion
import { motion } from 'framer-motion';

//Antd
import { Carousel } from 'antd';
import {ArrowRightOutlined } from '@ant-design/icons';

//React Router
import { NavLink } from 'react-router-dom';

const CarouselCard = ({ color, img1, img2, img3}) => {

  return(
    <div className={`relative bg-${color} h-96 md:h-[700px] 2xl:h-[1000px] `}>
      <div className='relative h-full w-full border flex justify-end py-7'>
        <motion.div
            className='absolute right-32 w-80 hidden md:flex '>
          <motion.img src={img1} alt="img" className="origin-bottom-left rotate-0 object-contain scale-75 " />
        </motion.div>

        <motion.div
            className='absolute right-32 w-80 hidden md:flex '>
          <motion.img src={img2} alt="img" className="origin-bottom-left rotate-6 object-contain scale-75" />
        </motion.div>

        <motion.div
            className='absolute right-32 w-80 hidden md:flex'>
          <motion.img src={img3} alt="img" className="origin-bottom-left rotate-12 object-contain scale-75" />
        </motion.div>
      </div>
    </div>
  )
}

const CarouselComponent = () => {
  const tag = [
    "Pokemon",
    "Football",
    "Yu-Gi-Oh",
  ]
  
  return (
    <div className="flex pt-32">
      <div className='h-80 md:h-[700px] 2xl:h-[1000px] flex items-center '>
        <div className='mt-[-300px] flex flex-col gap-7 w-full'>
          <div>
            <h1 className='text-white text-5xl font-bold '>Digitize your cards</h1>
            <h1 className='text-white text-5xl font-bold '>Trade them cheap & fast</h1>  
          </div>
          <div className='w-[600px] h-16'>
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
          <CarouselCard color="green" img1={pic3} img2={pic2} img3={pic1} />
        </div>

        <div>
          <CarouselCard color="accent" img1={pic15} img2={pic13} img3={pic11} />
        </div>
        <div>
          <CarouselCard color="green" img1={pic35} img2={pic33} img3={pic31} />
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
          <div className="px-[20px] pb-[20px] flex flex-row items-center flex-nowrap gap-[30px] overflow-scroll">
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
                <div key={index} className="w-24 md:w-64 2xl:w-80">
                  <ProductCard product={product}/>
                </div>
              )}
          </div>
      </div>
  )

  return(
      <div className="relative h-[350px] sm:h-[500px] md:h-auto sm:mb-24 mb-12">
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
  

  return (
    <div className={`relative h-auto w-full ${pageSettings.padding} flex flex-col gap-16`}>
        <CarouselComponent />
        <ProductList name="Recently Viewed & More " list={database_product_info.slice(0, 5)} />
        <ProductList name="You might interest..." list={database_product_info.slice(6, 13)} />
    </div>


  )
}

export default MainPage