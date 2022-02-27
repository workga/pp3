import React from 'react'
import { Link } from 'react-router-dom'

import './Adverts.scss'

const Adverts = ({ adverts, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="row row-cols-3 row-cols-md-4 gx-lg-0 gy-lg-4">
        
                {
                    adverts.map((advert) => (
                        <div className="col">
                        
                            <div className="card" style={{width:290, height: 400}}>
                                <div className="card-header" style={{backgroundColor: '#CCFFCC'}}>
                                    <h5 className="ps-4 mb-1">Заголовок: {advert.title}</h5>
                                    
                                            <Link to="/user" className="link-secondary ps-4" style={{ textDecoration: 'none', color:'black' }}>Автор: {advert.author}</Link>
                                    

                                 </div>   

                                <div className="card-body">
                                    <div className="list-group list-group-flush">

                                       
                                        <div className="list-group-item ps-4 mt-1">Краткое инфо автора</div>
                                        <div className="list-group-item ps-4 mt-3">Краткое инфо объявления</div>

                                        <div className="ad-card-body list-group-item btn btn-light">
                                            <Link to="/advert" className="verbose-button btn">Подробнее</Link>
                                        </div>

                                     </div>   
                                    
                                </div>
                        
                            </div>
                        </div>    
                    ))
                }
            
        </div>
    )
}

export default Adverts