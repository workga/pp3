
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userLogIn, userLogOut, successLogin, failLogin } from "../redux/actions"
import AuthService from '../services/auth-service';

import './LoginPage.scss'


function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    //const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const dispatch = useDispatch();

    let navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        if (userName && password) {

            AuthService.login(userName, password)
            .then(
                data => {
                    if (data.access) {
                        dispatch(successLogin(data));
                        console.log("Login")
                        console.log(JSON.parse(localStorage.getItem('user')))
                        navigate('/profile');
                    }
                    else {
                        dispatch(failLogin());
                        console.log(data.data.detail)
                        setError(data.data.detail);
                    }
                }
            )

            //dispatch(userLogIn(userName, password, navigate));
            //navigate('/profile')
            //console.log(store);
            //const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
            //navigate('/profile');
        }
    }


    return (
        <div className="">
            <div className="background">
                
                <form name="form" onSubmit={handleSubmit}>
                    <h3>Вход</h3>

                    {error && 
                    <h5 style={{color: 'red', fontSize: '11pt', textAlign: 'center'}}>
                        {error} 
                    </h5>
                    }
            
                    <label for="username">E-mail</label>
                    <input type="text" placeholder="Email" id="username" value={userName} onChange={(e) => setUserName(e.target.value)} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    {submitted && !userName &&
                        <div className="invalid-feedback"></div>
                    }
                    
                    
                    <label for="password">Пароль</label>
                    <input type="password" placeholder="Пароль" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback"></div>
                    }
                    

                    <button className="login-button">
                        Войти
                    </button>
                    
                    <div>
                        <h5 className="h5-reg">У вас нет аккаунта? Регистрируйтесь сейчас.</h5>
                    </div>

                    <button className="register-button" style={{ textDecoration: 'none' }} onClick={()=> navigate('/register') }>
                        Регистрация
                    </button>
                    
                    
                </form>
                
                
            </div>

            
        </div>
    );
}

export default LoginPage;