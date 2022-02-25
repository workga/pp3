
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userLogIn, userLogOut } from "../redux/actions"


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
        <div className="col-lg-8 offset-lg-2 mt-3">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    {submitted && !userName &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group mt-3">
                    <button className="btn btn-primary">
                        Login
                    </button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;