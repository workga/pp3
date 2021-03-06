import { Link } from "react-router-dom";

function User() {
    return (
        <div className="container mt-2">
            <img src='image.png' alt="..." class="img-thumbnail mt-2 mb-3"></img>

            <div class="row">
                <h2 class="col-md-1">Имя</h2>
                <Link to="/" className="col-md-1 btn btn-primary">Написать</Link>
            </div>

            

            <div className="col mt-2">
                <h2>Преподаватель, ученик</h2>
                
            </div>

            <div>
                <p>Краткая информация</p>
            </div>
            
            <div>
                <p>Подробности</p>
            </div>
            
            <div>
                <p>Объявления</p>
            </div>

        </div>
    )
}

export default User;