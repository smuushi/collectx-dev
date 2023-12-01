import React from 'react'

const ServicePage = () => {


    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32 mt-36"> {/*optional to change bgcolor: bg-gray-900 */}
            {/* background image here */}
          {/* <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
          /> */}
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Our Services</h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">
Welcome to CardMarketplace, where we offer a range of services tailored to enhance your trading card experience. Our commitment is to provide a seamless and secure platform for buying and selling digital trading cards. Explore the array of services we offer to elevate your collecting journey:              </p>


<h2 className="text-4xl font-bold tracking-tight text-black sm:text-3xl">1. NFT Digitization:</h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">
              We transform physical trading cards into unique, verifiable NFTs, preserving their authenticity and rarity in the digital realm. Our state-of-the-art technology ensures that each card on our platform is a one-of-a-kind digital asset, giving collectors a new dimension of ownership.             </p>

<h2 className="text-4xl font-bold tracking-tight text-black sm:text-3xl">2. Efficient Buying and Selling:</h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">Experience the convenience of our user-friendly interface that streamlines the process of buying and selling trading cards. Whether you're a buyer looking for the next addition to your collection or a seller aiming to find the right buyer, our platform makes transactions quick, simple, and efficient.

</p>
<h2 className="text-4xl font-bold tracking-tight text-black sm:text-3xl">3. Secure Transactions:</h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">Your security is our top priority. We employ cutting-edge encryption and security measures to safeguard your transactions and personal information. Shop and sell with confidence, knowing that your data is protected every step of the way.

</p>

<h2 className="text-4xl font-bold tracking-tight text-black sm:text-3xl">4. Diverse Card Collections:</h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">Explore a vast and diverse marketplace featuring trading cards from various genres, eras, and franchises. From classic sports cards to the latest collectibles from popular culture, CardMarketplace is your gateway to an extensive collection that caters to every enthusiast.            </p>
<h2 className="text-4xl font-bold tracking-tight text-black sm:text-3xl">5. Community Interaction:</h2>
              <p className="mt-6 text-lg leading-8 text-gray-500">Connect with fellow collectors through our community hub. Share your insights, discuss your favorite cards, and stay updated on the latest trends in the trading card world. Our community forum is a space where enthusiasts can engage in meaningful conversations and build connections with like-minded individuals.

</p>



            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div> */}
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {/* {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))} */}
              </dl>
            </div>
          </div>
        </div>
      )
}

export default ServicePage