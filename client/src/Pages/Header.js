import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogIn, userLogOut } from "../redux/actions";
import ProfileDropdownMenu from "../Components/ProfileDropdownMenu";


function Header() {

    
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);

    const [ProfileDropdowmMenuIsOpened, setProfileDropdowmMenuIsOpened] = useState(false);

    function handleClick() {
        setProfileDropdowmMenuIsOpened(cur => !cur);
    }

    const dispatch = useDispatch();

    let navigate = useNavigate();

    

    return (
        <header className="mt-3">
            
            <div className="btn-toolbar justify-content-between" role="toolbar">
                
                
                    <Link to="/" className="btn btn-primary ms-3">На главную</Link>
                
                

                {!isLoggedIn && (
                   
                        <Link to="/login" className="btn btn-success me-3">Войти</Link>  
                    
                )}

                {isLoggedIn && (
                    <div>
                       
                            <ProfileDropdownMenu/> 
                            
                    
                    </div>
                )}
                

            </div>
            
        </header>
    );
}

export default Header;