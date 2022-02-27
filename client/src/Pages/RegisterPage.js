import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import './RegisterPage.scss'

function RegisterPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    let navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);

        if (userName && password && firstName && lastName) {
            //dispatch(userLogIn(userName, password, navigate));
            
            //navigate('/profile')
            //console.log(store);
            //const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
            //navigate('/profile');
        }
    }




    return(
    <div className="">
        <div className="background">
            
            <form className="register-form" name="form" onSubmit={handleSubmit}>
                <h3>Регистрация</h3>

                <label for="first-name">Имя</label>
                <input type="text" placeholder="Имя" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={'form-control' + (submitted && !firstName ? ' is-invalid' : '')} />
                {submitted && !firstName &&
                    <div className="invalid-feedback"></div>
                }

                <label for="first-name">Фамилия</label>
                <input type="text" placeholder="Фамилия" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={'form-control' + (submitted && !lastName ? ' is-invalid' : '')} />
                {submitted && !lastName &&
                    <div className="invalid-feedback"></div>
                }
        
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
                

                <button className="register-button" style={{ textDecoration: 'none' }}>
                    Зарегистрироваться
                </button>

                <div>
                    <h5 className="h5-log">У вас уже есть учётная запись? Выполните вход.</h5>
                </div>

                <button className="login-button" style={{ textDecoration: 'none' }} onClick={()=> navigate('/login') }>
                    Войти
                </button>
                
                
            </form>
            
            
        </div>

        
    </div>
    );
}

export default RegisterPage;