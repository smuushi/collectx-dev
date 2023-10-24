import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload,Modal,Button } from 'antd';
import { motion } from 'framer-motion';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const UploadAvatar = () => {

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
        // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Avatar
            </div>
        </div>
    );

    return(
        <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    )
}

const UserSetting = () => {

    const creditCard = [];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setConfirmLoading(false);
            message.success('Credit card uploaded');
        }, 2000);
        
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='relative flex flex-col mb-36'>
            <Modal 
                title="Credit Card upload" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Back
                    </Button>,
                    <Button key="submit"  
                        style={{ background: 'white', color: 'black' }}
                        loading={loading} onClick={handleOk}>
                        Submit
                    </Button>
                ]}
                >
                <form className='py-10 px-5 w-full relative flex gap-5 flex-col'>
                    <input className='w-full h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Card Number'/>  
                    <input className='w-full h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Card Holder'/>
                    <div className='w-full flex justify-between gap-10'>
                        <input className='w-1/2 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='MM/YY'/>
                        <input className='w-1/2 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='CVC'/>
                    </div>
                </form>
            </Modal>
            <div className='w-full flex flex-col gap-10'>
                <div className="w-full md:w-1/2 px-5 py-16 self-center shadow-product ">
                    <p className='text-2xl py-5 text-center md:text-start'>Account setting</p>
                    <hr/>
                    <div className = 'px-16 w-full flex flex-col md:flex-row justify-between items-center mt-5'>
                        <p className='w-auto px-2 hidden md:block'>Upload your profile avatar</p>
                        <div><UploadAvatar /></div>
                    </div>
                    <div className = 'px-2 md:px-16 w-full flex flex-col md:flex-row justify-between items-center gap-3 mt-5'>
                        <p className='w-full md:w-auto px-2 '>Change Username</p>
                        <input className='md:w-96 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Username'/>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-20 h-10 bg-gray-300 rounded-md flex justify-center items-center cursor-pointer'
                            >
                            Save
                        </motion.div>
                    </div>
                    <div className = 'px-2 md:px-16 w-full flex flex-col md:flex-row justify-between items-center gap-3 mt-5'>
                        <p className='w-full md:w-auto px-2 '>Change Email Add</p>
                        <input className='md:w-96 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Username'/>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-20 h-10 bg-gray-300 rounded-md flex justify-center items-center cursor-pointer'
                            >
                            Save
                        </motion.div>
                    </div>
                    <div className = 'px-2 md:px-16 w-full flex flex-col md:flex-row justify-between items-center gap-3 mt-5'>
                        <p className='w-full md:w-auto px-2 '>Change Password</p>
                        <input className='md:w-96 h-10 border border-gray-300 rounded-md px-2' type='text' placeholder='Password'/>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-20 h-10 bg-gray-300 rounded-md flex justify-center items-center cursor-pointer'
                            >
                            Save
                        </motion.div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-5 py-16 self-center shadow-product">
                    <p className='text-2xl py-5 text-center md:text-start'>Payment setting</p>
                    <hr/>
                    {creditCard.length === 0 ? (
                        <div className='flex flex-col items-center justify-center'>
                            <p className='md:text-xl py-5'>You have no credit card</p>
                            
                            <motion.button 
                                className='w-20 h-10 bg-gray-200 rounded-md'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={showModal}>Add
                            </motion.button>
                        </div>
                    ) : (
                        <div
                            className='flex flex-col items-center justify-center'>
                            <p className='text-xl py-5'>You have {creditCard.length} credit card</p>
                            <button className='w-20 h-10 bg-gray-200 rounded-md'>Add</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserSetting