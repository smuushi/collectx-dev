import { 
  Route, 
  Routes,
  useLocation
} from 'react-router-dom'

import {
  AboutPage,
  AssetPage,
  BrowsePage,
  FilterPage,
  LoginPage,
  MainPage,
  SearchResult,
  UserProfilePage,
  UserProfileViewer,
  NoFound404,
} from './pages';

import{
  Header,
  Footer,
} from './components';

import { useEffect,useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux_store/actions/usersActions';
import { checkAuthentication, signOut } from './redux_store/actions/authActions'; // Adjust the path accordingly
import { fetchCards } from './redux_store/actions/cardActions';


function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  // Return null as this component doesn't render anything
  return null;
}

function App() {

  //Access token from local storage
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');


  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchCards())
    if (token) {
      dispatch(checkAuthentication());
    }
  }, [dispatch, token]);

  const logoutDev = () => {
    dispatch(signOut())
  }

  window.logoutDev = logoutDev;

  return (
    <div className="relative w-full min-h-screen flex flex-col gap-8">
      <ScrollToTop />
        <Header />
        <main className='flex-1 realtive h-auto'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/browse' element={<BrowsePage />} />
            <Route path='/search' element={<SearchResult />} />
            <Route path='/my-profile/*' element={<UserProfilePage />} />
            <Route path='/profile/:userId/*' element={<UserProfileViewer />} />
            <Route path='/asset/:id' element={<AssetPage />} />
            <Route path='/filter' element={<FilterPage />} />
            <Route path='*' element={<NoFound404 />} />
          </Routes>
        </main>
        
          <Footer />
    </div>
  )
}

export default App
