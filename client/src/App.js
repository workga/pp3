import { useSelector } from 'react-redux';
import { 
    BrowserRouter as Router, 
    Routes,
    Route 
  } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import UserId from './Components/UserID';
import NotFound from './Components/NotFound';
import Advertisement from './Components/Advertisement';
import User from './Pages/User';
import Profile from './Pages/Profile';
import LoginPage from './Pages/LoginPage';
import PrivateRoute from './Utils/PrivateRoute';


import './App.css'



import Header from './Pages/Header';



function App() {

    //const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    //console.log("isLoggenIn = ",isLoggedIn);
    
    return (
        <div className="">
        <Router>
            <Header />    
            <Routes>
                <Route path="*" element={<NotFound/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/users" element={<Users/>}></Route>

                <Route path="/profile"
                    element={
                    <PrivateRoute>
                        <Profile/>
                    </PrivateRoute>
                }/>

                <Route path="/users/:userName" element={<UserId/>}></Route>
                <Route path="/advert" element={<Advertisement/>}></Route>
                <Route path="/user" element={<User/>}></Route>
                
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Router>
        </div>
    )
}

export default App