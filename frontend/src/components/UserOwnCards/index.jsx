import React from 'react'

const UserOwnCard = () => {
  const owncard = [];
  

  return (
    <div className='w-full'>
      {owncard.length > 0 ? (
        <div className='w-full'>
          {owncard.map((item, index) => (
            <div key={index} className='w-full'>
              test
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