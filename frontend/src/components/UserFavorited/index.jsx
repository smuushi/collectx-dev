import {useState} from 'react'

const UserFavorited = () => {

  const favoritedList = [];
  

  return (
    <div className='w-full'>
      {favoritedList.length > 0 ? (
        <div className='w-full'>
          {favoritedList.map((item, index) => (
            <div key={index} className='w-full'>
              test
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full'>
          <p className='text-center'>No favorited</p>
        </div>
      )}
    </div>
  )
}

export default UserFavorited