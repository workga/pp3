

import './App.css'
import { 
    BrowserRouter as Router, 
    Routes,
    Route 
} from 'react-router-dom';

import Header from './Pages/Header';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import UserId from './Components/UserID';
import NotFound from './Components/NotFound';
import Advertisement from './Components/Advertisement';
import User from './Pages/User';
import Profile from './Pages/Profile';

function App() {
   

    return (
        <div className="container">
            <Router>
                <Header />
                <Routes>
                    <Route path="*" element={<NotFound/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/users" element={<Users/>}></Route>
                    <Route path="/users/:userName" element={<UserId/>}></Route>
                    <Route path="/advert" element={<Advertisement/>}></Route>
                    <Route path="/user" element={<User/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>

                </Routes>
            </Router>
        </div>
    )
}

export default App