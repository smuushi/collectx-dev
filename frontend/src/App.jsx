import { Route, Routes } from 'react-router-dom'

import {
  AboutPage,
  AssetPage,
  BrowsePage,
  FilterPage,
  LoginPage,
  MainPage,
  UserProfilePage,
} from './pages';

import{
  Header,
  Footer,
} from './components';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux_store/actions/usersActions';
import { checkAuthentication } from './redux_store/actions/authActions'; // Adjust the path accordingly


function App() {

  const dispatch = useDispatch();

  const token = localStorage.getItem('accessToken');


  useEffect(() => {
    dispatch(fetchUsers());
    if (token) {
      dispatch(checkAuthentication());
    }
  }, [dispatch, token]);



  return (
    <div className='w-full flex justify-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 2xl:px-80 bg-white-light'>
      <div className='w-full min-h-screen relative flex flex-col'>

        <div className='w-full sm:h-36 h-16 flex sm:items-center items-end'>
          <Header />
        </div>
        
        <main className=''>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/browse' element={<BrowsePage />} />
            <Route path='/profile' element={<UserProfilePage />} />
            <Route path='/asset' element={<AssetPage />} />
            <Route path='/filter' element={<FilterPage />} />
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </main>
        
        <div className='absolute h-auto w-screen md:w-full bottom-0'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
