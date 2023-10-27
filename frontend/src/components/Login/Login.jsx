import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux_store/actions/authActions';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault()
        const data = dispatch(signIn(username, password));
        if (data) {
            navigate('/profile')
        }
    };

    return (
        <>
            <div className="loginPage">
                <div className="loginLeft">
                
                </div>
                <div className="loginRight">
                    <p>Login</p>
                    <div>
                        <label>Username</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button onClick={handleSignIn}>Log In</button>
                </div>
            </div>
        </>
    )
}

export default Login; 