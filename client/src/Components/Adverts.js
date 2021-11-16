import React from 'react'

const Adverts = ({ adverts, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className="list-group mb-2">
            {
                adverts.map((advert) => (
                    <li className="list-group-item">
                        <p>Title: {advert.title}</p>
                        <p>Author: {advert.author}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Adverts