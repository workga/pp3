import React, {useState, useEffect} from "react";
import axios from "axios";
import Adverts from "./Adverts";
import Pagination from "./Pagination"
import { Link } from "react-router-dom"

function Home() {

    const [adverts, setAdverts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [advertsPerPage] = useState(3)
    const [homeURL] = useState("/")

    useEffect(() => {
            const getAdverts = async() => {
                setLoading(true)
                const res = await axios.get('/api/advert/?format=json')

                setAdverts(
                    res.data.map(advert => {
                        return advert;
                    })
                )
                setLoading(false)
            }
            getAdverts()
    }, [homeURL])   

    
    console.log(adverts)


    const lastAdvertIndex = currentPage * advertsPerPage
    const firstAdvertIndex = lastAdvertIndex - advertsPerPage
    const currentAdvert = adverts.slice(firstAdvertIndex, lastAdvertIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const totalPages = Math.ceil(adverts.length / advertsPerPage)

    const nextPage = () => setCurrentPage( cur => (cur + 1 <= totalPages) ? cur + 1 : cur )
    const prevPage = () => setCurrentPage( cur => (cur - 1 >= 1) ? cur - 1 : cur )

    
    return (
        <div className="container">

            <div className="row">
                <div>
                    <h1>Home</h1>
                </div>
            </div>

            

            <div className="row mt-2">
                
                <div className="col float-left">
                    <Link to="/" className="btn btn-primary">На главную</Link>
                </div>
                
                
                <div className="float-right col-md-1 btn-group"> 
                    <div >
                        <a href="/" className="btn btn-success">Войти</a>  
                    </div>
                    <div>
                        <Link to="/user" className="btn btn-secondary">Профиль</Link>
                    </div>
                </div>
                
                

                
            </div>


            
                <div className="row mt-5">
                    <h1 class="col-md-5">Фильтры</h1>
                    <div class="col-md-5 col-md-offset-2 input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <a href="/" type="button" class="btn btn-outline-primary">search</a>
                    </div>
                </div>

                
            
            
            
               
           <div className="container mt-5">
                <h1>Объявления</h1>
                <Adverts adverts={currentAdvert} loading={loading} />

                <div className="btn-toolbar" role="group" aria-label="Basic example">
                    <ul className="btn-group pe-2">
                        <button className="btn btn-outline-primary" onClick={() => setCurrentPage(1)}>{"<<"}</button>
                        <button className="btn btn-outline-primary" onClick={prevPage}>{"<"}</button>
                    </ul>
                    

                    <Pagination
                        itemsPerPage={advertsPerPage}
                        totalItems={adverts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />

                    <ul className="btn-group ps-2">
                        <button className="btn btn-outline-primary" onClick={nextPage}>{">"}</button>
                        <button className="btn btn-outline-primary" onClick={() => setCurrentPage(totalPages)}>{">>"}</button>
                    </ul> 
                    
                </div>
                    

           </div>

        </div>
    );
}

export default Home;