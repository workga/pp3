import './Home.scss'

import { useSelector } from "react-redux";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Adverts from "./Adverts";
import Pagination from "./Pagination"
import { Link } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi";

import SideNavbar from "./SideNavbar";


function Home() {

    const [adverts, setAdverts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [advertsPerPage] = useState(8)
    const [homeURL] = useState("/")

    useEffect(() => {
            const getAdverts = async() => {
                setLoading(true)
                const res = await axios.get('/api/adverts?format=json')

                setAdverts(
                    res.data.map(advert => {
                        return advert;
                    })
                )
                setLoading(false)
            }
            getAdverts()
    }, [homeURL])   

    const state = useSelector(state => state);
    console.log(state)


    const lastAdvertIndex = currentPage * advertsPerPage
    const firstAdvertIndex = lastAdvertIndex - advertsPerPage
    const currentAdvert = adverts.slice(firstAdvertIndex, lastAdvertIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const totalPages = Math.ceil(adverts.length / advertsPerPage)

    const nextPage = () => setCurrentPage( cur => (cur + 1 <= totalPages) ? cur + 1 : cur )
    const prevPage = () => setCurrentPage( cur => (cur - 1 >= 1) ? cur - 1 : cur )

    
    return (
        <div className="container home-page">

            

            <div>
                <div className="row mt-5">
                    
                </div>


                <div className="col-md-5 col-md-offset-2 input-group justify-content-center">
                        <SideNavbar className="side-navbar"/>
                        <input type="search" className="filter-search" placeholder="Search" id="search" aria-label="Search"
                            aria-describedby="search-addon" />
                        <a href="/" type="button" class="btn btn-outline-primary" style={{paddingTop:'10px'}}><BiSearchAlt2/></a>
                </div>
            </div>
                
            
            
            
               
           <div className="container contatiner-adverts mt-5">
                <h1 className="mb-4 adverts-h1">Объявления</h1>

                <Adverts adverts={currentAdvert} loading={loading} />

                <div className="btn-toolbar mt-5" role="group" aria-label="Basic example">
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