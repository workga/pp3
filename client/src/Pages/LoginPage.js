
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userLogIn, userLogOut } from "../redux/actions"

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
            dispatch(userLogIn(userName, password, navigate));
            
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

            
                    <label for="username">Имя пользователя</label>
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