import {
  UserFavorited,
  UserOfferMade,
  UserOwnCards,
  UserSetting
} from '../../components'
import { pageSettings } from './../../constants/style';

import { userNavigation } from '../../constants'
import { useState,useEffect } from "react";
import { useSelector } from 'react-redux';
import { Rate,Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import { 
  Routes, 
  Route, 
  NavLink,
  useLocation,
} from 'react-router-dom';

const UserProfilePage = () => {
  let authStatus = useSelector(state => state.auth)
  let allUsers = useSelector(state => state.users)
  let currentUser = allUsers[authStatus.currentUser]
  //TODO: BUG- when refresh page, currentUser is undefined
  //const currentUser = useSelector(state => state.profile.profile)

  const location = useLocation();
  const pathParts = location.pathname.split('/'); //split path by '/'
  const lastPath = pathParts[pathParts.length - 1];//get last part of path
  const [ active, setActive ] = useState(lastPath);
  useEffect(() => {
    const pathParts = location.pathname.split('/'); //split path by '/'
    const lastPath = pathParts[pathParts.length - 1];//get last part of path
    setActive(lastPath);
  },[location])
  return (
    <div className='w-full h-full relative'>
      <div className="w-full h-64 md:h-96 bg-secondary relative mb-20">
        <div className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-card border border-white absolute -bottom-12 md:-bottom-16 left-8 md:left-64 lg:left-80 flex justify-center items-center bg-white" >
          avatar
        </div>
      </div>

      <div className={pageSettings.padding}>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5 items-center'>
            <p className="text-2xl font-bold">{currentUser.username}</p>
            <Rate defaultValue={4.5} disabled allowHalf />
          </div>
          <p className="text-four">Joined 2022 ( User infomation )</p>
          <div>
          <Tag 
            icon={<CheckCircleOutlined />} 
            color="#4CAF50"
          >
            Verified Store
          </Tag>
          </div>
        </div>

        <div className="flex gap-5 mb-5 mt-5">
          <ul className="flex gap-5 overflow-scroll md:overflow-auto py-5">
              {
                userNavigation.map((nav,index) => (
                    <li key={index} onClick={() => setActive(nav.url)}>
                      <NavLink 
                          to={nav.url} 
                          className={`${active === nav.url ? "text-black bg-slate-100" : "text-four hover:bg-slate-100 "}  rounded-lg h-10 p-2 flex gap-5 items-center cursor-pointer`}>
                          <span className={`tracking-wider text-sm `}>{nav.name}</span>
                      </NavLink>
                    </li>
                ))}
          </ul>   
        </div>

        <hr />
        <div className="mt-5">
            <Routes>
                <Route default element={<UserOwnCards/>}/>
                <Route path="/" element={<UserOwnCards/>}/>
                <Route path="/favorited" element={<UserFavorited />}/>
                <Route path="/offer-made" element={<UserOfferMade/>}/>
                <Route path="/own-cards" element={<UserOwnCards/>}/>
                <Route path="/setting" element={<UserSetting/>}/>
            </Routes>
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage