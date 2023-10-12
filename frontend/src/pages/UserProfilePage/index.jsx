import {
  UserProfile,
  UserFavorited,
  UserOfferMade,
  UserStore,
  UserOwnCards,
  UserSetting
} from '../../components'
import { userNavigation } from '../../constants'

import { useState } from "react";
import { useSelector } from 'react-redux';
import { 
  Routes, 
  Route, 
  NavLink,
  useLocation 
} from 'react-router-dom';

const UserProfilePage = () => {

  const user = useSelector(state => state.auth.currentUser); // get user info from database

  const location = useLocation();
  const pathParts = location.pathname.split('/'); //split path by '/'
  //get last part of path
  const lastPath = pathParts[pathParts.length - 1];
  const [ active, setActive ] = useState(lastPath);

  return (
    <div className='w-full h-full relative'>
      <div className="w-full h-96 bg-secondary relative mb-20">
        <div className="w-36 h-36 rounded-full shadow-card border border-white absolute -bottom-16 left-16 flex justify-center items-center bg-white" >
          avatar
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold">{user.username}</p>
        <p className="text-four">Joined 2022(User infomation)</p>
      </div>

      <div className="flex gap-5 mb-5 mt-5">
        <ul className="flex gap-5">
            {
              userNavigation.map((nav,index) => (
                  <li key={index} onClick={() => setActive(nav.url)}>
                    <NavLink 
                        to={nav.url} 
                        className={`${active === nav.url ? "text-black font-semibold bg-slate-100" : "text-four hover:bg-slate-100 "}  rounded-lg h-10 p-2 flex gap-5 items-center cursor-pointer`}>
                        <span className={`tracking-wider text-sm `}>{nav.name}</span>
                    </NavLink>
                  </li>
              ))}
        </ul>   
      </div>

      <hr />
      <div className="mt-5">
          <Routes>
              <Route default element={<UserProfile user={user}/>}/>
              <Route path="/" element={<UserProfile user={user}/>}/>
              <Route path="/profile" element={<UserProfile user={user}/>}/>
              <Route path="/favorited" element={<UserFavorited user={user}/>}/>
              <Route path="/offer-made" element={<UserOfferMade user={user}/>}/>
              <Route path="/store" element={<UserStore user={user}/>}/>
              <Route path="/own-cards" element={<UserOwnCards user={user}/>}/>
              <Route path="/setting" element={<UserSetting user={user}/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default UserProfilePage