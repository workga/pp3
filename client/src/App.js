import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet'
import './App.css'
import Countries from './Components/Countries.js';
import Pagination from './Components/Pagination.js'

function App() {
    const TITLE = "Async API with pagination"

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)

    useEffect(() => {
        const getCountries = async () => {
            setLoading(true)
            const res = await axios.get('https://restcountries.com/v3.1/all')

            setCountries(
                res.data.sort(
                    (countryA, countryB) => {
                        if (countryA.name.common < countryB.name.common) {
                            return -1;
                        }
                        if (countryA.name.common > countryB.name.common) {
                            return 1;
                        }
                        return 0;
                    }
                )
            )

            setLoading(false)
        }

        console.log(countries)

        getCountries()
    }, [])
    

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const countOfPages = Math.ceil(countries.length / countriesPerPage)
    const nextPage = () => setCurrentPage( cur => ( (cur + 1) <= countOfPages ) ? (cur + 1) : cur )
    const prevPage = () => setCurrentPage( cur => ( (cur - 1) >= 1 ) ? (cur - 1) : cur )

    return (
        <div className="container mt-5">
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <h1 className="text-primary">Countries</h1>
            <Countries countries={currentCountry} loading={loading} />
            <Pagination 
                itemsPerPage={countriesPerPage} 
                totalItems={countries.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <button className="btn btn-outline-primary" onClick = {prevPage}>Prev page</button>
            <button className="btn btn-outline-primary" onClick = {nextPage}>Next page</button>
        </div>
    )
}

export default App