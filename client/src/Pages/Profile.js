import { Link } from "react-router-dom";


function Profile() {
    return (
        <div className="container mt-5">
            <img src='image.png' alt="..." class="img-thumbnail"></img>
            <h1>Имя</h1>

            <div className="col">
                <h2>Преподаватель, ученик</h2>
                <Link to="/" className="btn btn-primary">Написать</Link>
            </div>

            <div className="mt-2">
                <p>Краткая информация</p>
            </div>
            
            <div>
                <p>Подробности</p>
            </div>
            
            <div>
                <p>Объявления</p>
                <Link to="/" className="btn btn-primary">Создать объявление</Link>
            </div>

        </div>
    )
}

export default Profile