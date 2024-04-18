import { useState, useEffect } from 'react';
import { Main, Title } from './Pages.styled';
import Loader from '../components/Loader/Loader';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import { fetchAdverts } from 'services/api';

const HomePage = () => {
    const [adverts, setAdverts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const advertsData = await fetchAdverts();
                setAdverts(advertsData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Main>
            <div>
                {isLoading && <Loader />}
                <Title>Adverts</Title>
                {error ? (
                    <p>Error: {error.message}</p>
                ) : adverts !== 0 ? (
                    <AdvertsList adverts={adverts} />
                ) : (
                    !isLoading && <p>No adverts found.</p> // Додана умова для перевірки isLoading
                )}
            </div>
        </Main>
    );
}

export default HomePage;
