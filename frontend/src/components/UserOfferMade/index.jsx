import React from 'react'

const Offer = ({ offer }) => {
  return (
    <div className='w-full flex flex-col gap-5 px-12'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-5'>
          <div className='w-64 '>
            <img src={offer.image} alt={offer.name} className='w-full h-full object-contain' />
          </div>
          <div className='flex flex-col gap-2 justify-center'>
            <span>{offer.name}</span>
            <span className='text-sm text-gray-400'>Offered: ${offer.priceOffered}</span>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='px-2 py-1 rounded-md shadow-product cursor-pointer'>Accept</p>
          <p className='px-2 py-1 rounded-md shadow-product cursor-pointer'>Reject</p>
        </div>
      </div>
    </div>
  )
}

const UserOfferMade = () => {

  //TODO：fetch data from backend
  const offerData = [
    {
      id: 1,
      name: 'Card 1',
      price: 100,
      image: 'https://images.pokemontcg.io/swsh4/1.png',
      status: 'pending',
      priceOffered: 50
    },
    {
      id: 2,
      name: 'Card 2',
      price: 200,
      image: 'https://images.pokemontcg.io/swsh4/2.png',
      status: 'pending',
      priceOffered: 50
    },
    {
      id: 3,
      name: 'Card 3',
      price: 300,
      image: 'https://images.pokemontcg.io/swsh4/3.png',
      status: 'pending',
      priceOffered: 50
    }
  ]


  const offer = offerData;


  return (
    <div className='w-full py-5 border rounded-md h-auto'>
      {offer.length > 0 ? (
        <div className='w-full flex flex-col gap-5'>
          {offer.map((item, index) => (
            <div key={index} className="w-full">
              <Offer offer={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full flex flex-col gap-5'>
          <p className='text-center font-semibold text-lg'>You don't have any offer yet</p>
          <p className='text-center'>Go shopping!</p>
        </div>  
      )}
    </div>
  )
}

export default UserOfferMade