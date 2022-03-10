import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogIn, userLogOut } from "../redux/actions";
import ProfileDropdownMenu from "../Components/ProfileDropdownMenu";


function Header() {

    const user = JSON.parse(localStorage.getItem('user'));
    const isLoggedIn = (user && user.access)

    const [ProfileDropdowmMenuIsOpened, setProfileDropdowmMenuIsOpened] = useState(false);

    function handleClick() {
        setProfileDropdowmMenuIsOpened(cur => !cur);
    }

    const dispatch = useDispatch();

    let navigate = useNavigate();

    

    return (
        <header className="mt-0" style={{height:'60px', backgroundColor: '#5CDB95'}}>
            
            <div className="btn-toolbar justify-content-between" role="toolbar">
                
                
                    <Link to="/" className="btn mt-2 mx-2 px-n2 btn-primary" style={{height:'40px'}}>На главную</Link>
                
                

                {!isLoggedIn && (
                   
                        <Link to="/login" className="btn btn-success my-2" style={{marginRight:'10px'}}>Войти</Link>  
                    
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