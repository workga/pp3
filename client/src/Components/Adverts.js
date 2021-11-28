import React from 'react'
import { Link } from 'react-router-dom'

const Adverts = ({ adverts, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
        
                {
                    adverts.map((advert) => (
                        <div className="col">
                        
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="ps-4">Заголовок: {advert.title}</h5>
                                    <li className="list-group-item">
                                            <Link to="/user" className="link-secondary ps-2">Автор: {advert.author}</Link>
                                    </li>

                                 </div>   

                                <div className="card-body">
                                    <ul className="list-group list-group-flush">

                                       
                                        <li className="list-group-item ps-4">Краткое инфо автора</li>
                                        <li className="list-group-item ps-4">Краткое инфо объявления</li>

                                        <li className="list-group-item btn btn-light mt-2">
                                            <Link to="/advert" className="btn btn-light">Подробнее</Link>
                                        </li>

                                     </ul>   
                                    
                                </div>
                        
                            </div>
                        </div>    
                    ))
                }
            
        </div>
    )
}

export default Adverts