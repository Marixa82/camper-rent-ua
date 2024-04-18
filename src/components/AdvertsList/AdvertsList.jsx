import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdvertsList = ({adverts}) => {
    const location = useLocation();
    const visibleAdverts = adverts.filter(advert => advert.id && advert.name);
    return (
        <div>
            <ul>
                {visibleAdverts.map(advert => (
                    <li key={advert.id}>
                        <Link to={`/adverts/${advert.id}`} state={{ from: location }}>
                            <h1>{advert.name}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AdvertsList;