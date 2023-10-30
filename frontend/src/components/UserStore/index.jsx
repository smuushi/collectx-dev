import React from 'react'

const UserStore = () => {
  const userStore = [];
  

  return (
    <div className='w-full'>
      {userStore.length > 0 ? (
        <div className='w-full'>
          {userStore.map((item, index) => (
            <div key={index} className='w-full'>
              test
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full'>
          <p className='text-center font-semibold text-lg'>No Card post here</p>
        </div>
      )}
    </div>
  )
}

export default UserStore