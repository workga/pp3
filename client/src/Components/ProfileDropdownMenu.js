
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogIn, userLogOut } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth-service";

import './ProfileDropdownMenu.css'


const ProfileDropdownMenu = () => {

    const dropdownRef = useRef(null);

    const [ProfileDropdowmMenuIsOpened, setProfileDropdowmMenuIsOpened] = useState(false);

    const handleClick = () => setProfileDropdowmMenuIsOpened(!ProfileDropdowmMenuIsOpened);

    const dispatch = useDispatch();



    const navigate = useNavigate();



    

    function handleSubmitLogOut(e) {
        e.preventDefault();
        AuthService.logout();
        dispatch(userLogOut());
        navigate('/');
    }
    
    
        return (
            <div class="menu-container">
                <button class="menu-trigger" style={{marginTop:'10px'}} onClick={ handleClick } type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Профиль
                </button>
                <nav ref={dropdownRef} className={`menu ${ProfileDropdowmMenuIsOpened ? 'active' : 'inactive'}`}>
                    <ul className="" aria-labelledby="">
                        <li><Link to="/profile" className="dropdown-item" >Профиль</Link></li>
                        <li><Link to="/chats" className="dropdown-item" >Чаты</Link></li>
                        <li><Link to="/settings" className="dropdown-item" >Настройки</Link></li>
                        <li><button className="dropdown-item btn btn-danger me-3" onClick={handleSubmitLogOut}>Выйти</button></li>
                    </ul>
                </nav>
                
            </div>
        )
    
}

export default ProfileDropdownMenu;