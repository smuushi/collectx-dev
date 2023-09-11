import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, createAccount } from '../redux_store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const dispatch = useDispatch();
  const { isLoggedIn, message, currentUser } = useSelector(state => state.auth);
  const navigate = useNavigate(); 

  const handleCreateAccount = () => {
    dispatch(createAccount(username, password, email));
  };

  const handleSignIn = () => {
    const data = dispatch(signIn(username, password));
    if (data) {
      navigate('/profile')
    }
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div>

              <button onClick={handleCreateAccount}>Create Account</button>
              <button onClick={handleSignIn}>Sign In</button>
              
          </div>

        <p>{message ? message : 'No auth redux state messages'}</p>
        <p>{isLoggedIn ? 'Logged in' : 'Not logged in'}</p>
        <p>{currentUser ? `${currentUser.username} ${currentUser.uuid}` : 'No current User'}</p>
      </div>
    </>
  );
};

export default SignUp;
