import { Link } from "react-router-dom";

function Advertisement() {
    return (
        <div className="container">

            <div className="row justify-content-start">
                <div className="col-2 mt-2">
                    <h1>Заголовок</h1>
                </div>
                
                <div className="col-2 mt-3">
                    <Link to="/" className="btn btn-primary">Откликнуться</Link>
                </div>
                
            </div>   

                <Link to="/user" className="btn btn-primary mt-2 mb-3">Автор</Link>
            

            <p>
                Краткая информация
            </p>

            <p>
                Подробности
            </p>
 
        </div>
    )
}

export default Advertisement