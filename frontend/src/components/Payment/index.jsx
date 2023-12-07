import { useState } from 'react';
import { motion } from 'framer-motion';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CreditCard = ({price}) => {
    return(
        <div className='w-full flex flex-col'>
            <div className="mb-4">
                    {/* 付款按钮 */}
                    <button className="w-full bg-gray-300 py-2 rounded-lg text-gray-600 mb-2">Google Pay is not set up</button>
                    <div className="text-center">or use card</div>
                </div>
            
                <form className='py-4 w-full relative flex gap-5 flex-col'>
                    <input className='w-full h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Card Number'/>  
                    <input className='w-full h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Card Holder'/>
                    <div className='w-full flex justify-between gap-10'>
                        <input className='w-1/2 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='MM/YY'/>
                        <input className='w-1/2 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='CVC'/>
                    </div>
                </form>
            
                <div className="mb-4">
                    {/* 价格信息 */}
                    <button className="w-full bg-blue-600 py-3 rounded-lg text-white">Pay ${price}</button>
                    <p className="text-xs text-center text-gray-500 mt-2">Please review the terms of service for purchasing this paper, and we recommend doing so shortly before making a formal purchase.</p>
                </div>
            
                <div className="text-center text-gray-400 text-xs">
                    {/* Powered by thirdweb */}
                    Powered By <span className="font-bold">thirdweb</span>
                </div>
        </div>
    )
}

const PayPal = () => {
    return(
        <div className='w-full flex flex-col'>
            <PayPalScriptProvider options={{ clientId: "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        </div>
    )
}

const Payment = ({setShowPayment,product}) => {

    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const {img,name, price} = product;
    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center mt-16 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto">
                <div className="text-right">
                    <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowPayment(false)}>&times;</button>
                </div>
                <div className="flex gap-5">
                    {/* 商品图片和描述 */}
                    <img src={img[0]} alt="Collectible" className="mx-auto mb-3 w-32" />
                    <div className="flex flex-col gap-16">
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <div className="flex w-full justify-between items-center">
                            <p className="text-gray-700">Price</p>
                            <p className="text-gray-900 font-bold">${price.current}</p>
                        </div>
                    </div>
                </div>
            
                <div>
                    {/* 支付方式 */}
                    <p className="text-gray-700 font-bold mb-2">Pay with</p>
                    <div className="flex items-center justify-between mb-4 gap-5">
                        {/* <button className="border rounded-full py-2 px-4 text-sm font-semibold bg-gray-100">Digital wallet</button> */}
                        <motion.button 
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.95}}
                            onClick={() => setPaymentMethod('creditCard')}
                            className="w-full border rounded-md py-2 px-7 text-sm font-semibold">Credit card</motion.button>
                        <motion.button 
                            whileHover={{scale:1.05}}
                            whileTap={{scale:0.95}}
                            onClick={() => setPaymentMethod('paypal')}
                            className="w-full border rounded-md py-2 px-7 text-sm font-semibold">Paypal</motion.button>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">An additional processing fee is applied for credit card payments.</p>
                </div>
            
                {paymentMethod === 'creditCard' && <CreditCard price={price.current}/>}
                {paymentMethod === 'paypal' && <PayPal />}

            </div>
        </div>
        )
}

export default Payment