import {useState} from 'react';

import styles from './Home.module.css';
import BeerList from './BeerList/BeerList';
import BeerBasket from './BeerBasket/BeerBasket';

const Home = () => {
    const [isLoadingBeers, setIsLoadingBeers] = useState(false)
    const [selectedBeers, setSelectedBeers] = useState([])

    return (
        <div className={styles.homePage}>
            <div className={styles.content}>
                <div className={styles.beerTitle}>
                    <h2>Receipts:</h2>
                </div>
                <div className={styles.beerListContainer}>
                    {isLoadingBeers ? (
                        <div>
                            Loading..
                        </div>
                    ) : (
                        <BeerList setIsLoadingBeers={setIsLoadingBeers}
                                  setSelectedBeers={setSelectedBeers}
                                  selectedBeers={selectedBeers}
                        />
                    )}
                    <BeerBasket setSelectedBeers={setSelectedBeers}
                                selectedBeers={selectedBeers}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;