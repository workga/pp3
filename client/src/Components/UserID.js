import { useParams, Link } from "react-router-dom";

function UserId() {
    let {userName} = useParams();

    return (
        <div>
            <Link to="/users">Назад</Link>
            <h1>User: {userName}</h1>
        </div>
    )
}

export default UserId;