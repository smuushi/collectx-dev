import {
    UserFavorited,
    UserOfferMade,
    UserOwnCards,
    UserSetting
} from '../../components';
import { pageSettings } from './../../constants/style';
import { userNavigation } from '../../constants';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Rate, Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { 
Routes, 
Route, 
NavLink,
useLocation,
useNavigate,
} from 'react-router-dom';
import userbackground from "../../constants/testData/userbackground.jpg";

const UserProfileViewer = () => {
    const authStatus = useSelector(state => state.auth);
    const allUsers = useSelector(state => state.users);
    const navigate = useNavigate();
    const location = useLocation();

    // Extract userId or username from the URL
    const userIdFromURL = location.pathname.split('/')[2]; 
    const viewedUser = allUsers[userIdFromURL];

    // Fallback to default avatar if none found
    const avatar = viewedUser?.pfp_url ? viewedUser?.pfp_url : "https://i.imgflip.com/6n0xmt.png?a471624";

    const pathParts = location.pathname.split('/');
    const lastPath = pathParts[pathParts.length - 1];
    const [active, setActive] = useState(lastPath);

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const lastPath = pathParts[pathParts.length - 1];
        setActive(lastPath);
    },[location]);

    if (authStatus.isLoggedIn === false) {
        return <h3>please log in</h3>;
    }

    if (!viewedUser) {
        return <h3>User not found</h3>;
    }

    return (
        <div className='w-full h-full relative'>
        <div className="w-full h-64 md:h-96 bg-userbackground relative mb-20">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full shadow-card border border-white absolute -bottom-12 md:-bottom-16 left-8 md:left-64 lg:left-80 flex justify-center items-center bg-white">
            <img src={avatar} alt="avatar" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover" />
            </div>
        </div>

        <div className={pageSettings.padding}>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-5 items-center'>
                    <p className="text-2xl font-bold">{viewedUser?.username}</p>
                    <Rate defaultValue={4.5} disabled allowHalf />
                </div>
                <p className="text-four">Joined 2022 ( User infomation )</p>
                <div>
                    <Tag icon={<CheckCircleOutlined />} color="#4CAF50">
                    Verified Store
                    </Tag>
                </div>
            </div>

            <div className="flex gap-5 mb-5 mt-5">
                <ul className="flex gap-5 overflow-scroll md:overflow-auto py-5">
                    {
                        userNavigation.map((nav, index) => (
                        <li key={index} onClick={() => setActive(nav.url)}>
                            <NavLink 
                            to={nav.url} 
                            className={`${active === nav.url ? "text-black bg-slate-100" : "text-four hover:bg-slate-100 "}  rounded-lg h-10 p-2 flex gap-5 items-center cursor-pointer`}>
                                <span className={`tracking-wider text-sm`}>{nav.name}</span>
                            </NavLink>
                        </li>
                        ))
                    }
                </ul>   
            </div>

            <hr />
            <div className="mt-5">
                SHOWING CARD HERE
            </div>
        </div>
    </div>
);
}

export default UserProfileViewer;
