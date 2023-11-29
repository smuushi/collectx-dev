import React from 'react'
import { resultData } from '../../constants/testData/card'
import { ProductCard } from '../index'

const UserOwnCard = () => {
  const owncard = resultData;
  

  return (
    <div className='w-full'>
      {owncard.length > 0 ? (
        <div className='w-full flex gap-5'>
          {owncard.map((item, index) => (
            <div key={index} className="w-24 md:w-64 2xl:w-96">
              <ProductCard product={item} />
            </div>
          ))}
        </div>
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