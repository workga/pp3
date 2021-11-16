import { Link } from "react-router-dom";

function Advertisement() {
    return (
        <div>
            <Link to="/" className="btn btn-primary">На главную</Link>

            <div className="col">
                <h1>Заголовок</h1>
                <Link to="/" className="btn btn-primary">Откликнуться</Link>
                <Link to="/" className="btn btn-primary">Автор</Link>
            </div>

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