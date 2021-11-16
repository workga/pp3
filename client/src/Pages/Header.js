import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                </ul>
                
            </nav>
        </div>
    );
}

export default Header;