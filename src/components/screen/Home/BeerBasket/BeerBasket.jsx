import styles from './BeerBasket.module.css';
import {checkArr} from 'utils/check-arr';

const BeerBasket = ({setSelectedBeers, selectedBeers}) => {
    const handleDeleteSelectedBeers = () => {
        setSelectedBeers([]);
    };
    return (
        <div className={styles.beerBasket}>

            {checkArr(selectedBeers) ? (
                <div className={styles.content}>
                    <div className={styles.basketTitle}>
                        Basket
                    </div>
                    {selectedBeers.map((selectedBeer) => (
                        <div key={selectedBeer.id}>
                            {selectedBeer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.basketTitle}>
                    Basket is empty
                </div>
            )}
            {selectedBeers.length > 0 && (
                <div>
                    <button onClick={handleDeleteSelectedBeers}
                            className={styles.deleteBeersBtn}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default BeerBasket;