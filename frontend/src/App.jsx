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

import { pageSettings } from './constants/style';




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
    <div className={`w-full flex justify-center bg-white-light`}>
      <div className='w-full min-h-screen relative flex flex-col gap-8'>

        <div className={`${pageSettings.padding} realtive w-full sm:h-36 h-16 flex sm:items-center items-end`}>
          <Header />
        </div>
        
        <main className='realtive h-auto '>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/browse' element={<BrowsePage />} />
            <Route path='/profile/*' element={<UserProfilePage />} />
            <Route path='/asset/:id' element={<AssetPage />} />
            <Route path='/filter' element={<FilterPage />} />
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </main>
        
        <footer className='w-screen md:w-full bg-[#24262b]'>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
