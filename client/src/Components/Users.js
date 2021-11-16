import { useMatch, Link } from "react-router-dom"

function Users() {
    let match = useMatch("/users");
    return (
        <div className="container">
            <h1>Users</h1>
            <ul>
                <li><Link to="/profile">Default user</Link></li>
                <li><Link to={`${match.pathname}/ivan`}>Ivan</Link></li>
                <li><Link to={`${match.pathname}/petr`}>Petr</Link></li>
            </ul>
        </div>
    );
}

export default Users;