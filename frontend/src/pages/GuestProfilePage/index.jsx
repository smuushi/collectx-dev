import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { pageSettings } from './../../constants/style';
import { ProductCard } from '../../components';

//Simluated data
import { findProductById } from '../../Utils';
import { database_product_info } from '../../constants/testData/card';
import { UserData } from '../../constants/testData/User';

//Antd
import { Rate, Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';



const GuestProfilePage = () => {
  let { id } = useParams();

  //TODO: fetch data from backend, get user info by id
  const data = findProductById(id,UserData)
  return (
    <div className='w-full h-full relative md:mt-32'>
      <div className="w-full h-64 md:h-96 bg-userbackground relative mb-20">
        <div className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-card border border-white absolute -bottom-12 md:-bottom-16 left-8 md:left-64 lg:left-80 flex justify-center items-center bg-white" >
          <img src={data.avatar} alt="avatar" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover" />
        </div>
      </div>

      <div className={pageSettings.padding}>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5 items-center'>
            <p className="text-2xl font-bold">{data.name}</p>
            <Rate defaultValue={data.rate} disabled allowHalf />
          </div>
          <p className="text-four">Joined {data.joinDate} ( User infomation )</p>
          <div>
          {data.isVerified && 
            <Tag icon={<CheckCircleOutlined />} color="#4CAF50">
              Verified Store
            </Tag>  
          }
          
          </div>
        </div>
        <div className="mt-5">
          {data.cards.length > 0 ?
            <>
              <div className="hidden md:flex flex-wrap gap-12">
                {data.cards.map((card, index) =>{
                  //TODO: fetch data from backend, get product info by id
                  return(
                    <div key={index} className='w-24 md:w-64 2xl:w-80'>
                      <ProductCard product={findProductById(card, database_product_info)} />
                    </div>
                  )
                })}
              </div>


              <div className='flex md:hidden justify-center'>
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="w-64"
                >
                  {
                    data.cards.map((card, index) =>{
                      const { img } = findProductById(card, database_product_info)
                      return(
                        <SwiperSlide key={index}>
                          <NavLink
                            to={`/asset/${card}`}
                            className='w-64'>
                            <img src={img[0]} alt={`Card ${index}`} />
                          </NavLink>
                        </SwiperSlide>
                      )
                    })
                  }
              </Swiper>
              </div>
            </>
            :
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-bold">No cards yet</p>
              <p className="text-four">This user has not added any cards yet</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default GuestProfilePage