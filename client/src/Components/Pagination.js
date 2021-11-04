import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map( (number) => (
                             
                        <li className={ (number === currentPage) ? "page-item active" : "page-item" } key={number}>
                            <a href="!#" className="page-link" onClick={ () => paginate(number) }>
                                {number}
                            </a>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination