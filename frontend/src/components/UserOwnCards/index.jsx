import React from 'react'
import { resultData } from '../../constants/testData/card'
import { ProductCard } from '../index'
import { NavLink } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const UserOwnCard = () => {
  const owncard = resultData;
  

  return (
    <div className='w-full'>
      {owncard.length > 0 ? (
        <>

          <div className='w-full gap-5 hidden md:flex'>
            {owncard.map((item, index) => (
              <div key={index} className="w-24 md:w-64 2xl:w-96">
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          <div className='flex md:hidden justify-center'>
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="w-64"
                >
                  {
                    owncard.map((card, index) =>{
                      return(
                        <SwiperSlide key={index}>
                          <NavLink
                            to={`/asset/${card.id}`}
                            className='w-64'>
                            <img src={card.img[0]} alt={`Card ${index}`} />
                          </NavLink>
                        </SwiperSlide>
                      )
                    })
                  }
              </Swiper>
              </div>
        
        </>
      ) : (
        <div className='w-full flex flex-col gap-5'>
          <p className='text-center font-semibold text-lg'>You don't have own card yet</p>
          <p className='text-center'>Go shopping!</p>
        </div>
      )}
    </div>
  )
}

export default UserOwnCard