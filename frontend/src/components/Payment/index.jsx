import { useState } from 'react';
import { motion } from 'framer-motion';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CreditCard = () => {
    return(
        <div className='w-full flex flex-col'>
            <div className="mb-4">
                    {/* 付款按钮 */}
                    <button className="w-full bg-gray-300 py-2 rounded-lg text-gray-600 mb-2">Google Pay is not set up</button>
                    <div className="text-center">or use card</div>
                </div>
            
                <div className="flex flex-col gap-5 items-center mb-4">
                    {/* 用户信息输入 */}
                    <input type="text" placeholder="姓名" className="border-2 border-gray-200 rounded-lg p-2 mr-2 flex-grow" />
                    <input type="text" placeholder="卡号" className="border-2 border-gray-200 rounded-lg p-2 flex-grow" />
                </div>
            
                <div className="mb-4">
                    {/* 价格信息 */}
                    <button className="w-full bg-blue-600 py-3 rounded-lg text-white">立即支付 $25.75</button>
                    <p className="text-xs text-center text-gray-500 mt-2">购买这 Paper 的服务条款，推荐您在正式购买不久阅读这份条款。</p>
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
    console.log(name)
    return(
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
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
            
                {paymentMethod === 'creditCard' && <CreditCard />}
                {paymentMethod === 'paypal' && <PayPal />}

            </div>
        </div>
        )
}

export default Payment