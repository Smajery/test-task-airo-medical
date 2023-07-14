import {useEffect} from 'react';

import useBeerStore from 'hooks/useBeerStore';
import styles from './Beer.module.css';

const Beer = () => {
    const beer = useBeerStore((state) => state.beer);
    const fetchOneBeer = useBeerStore((state) => state.fetchOneBeer);

    useEffect(() => {
        const selectedBeerId = localStorage.getItem('beerId');
        fetchOneBeer(selectedBeerId)
            .then(() => console.log('Success!'))
            .catch(e => console.error('Something went wrong: ', e));
    }, []);

    console.log(beer)

    return (
        <div className={styles.beerPage}>
            <div className={styles.content}>
                {Object.keys(beer).length > 0 ? (
                    <div>
                        <img src={beer.image_url}
                             alt={beer.name}
                             width={100}
                        />
                        <div>Name: {beer.name}</div>
                        <div>Tagline: {beer.tagline}</div>
                        <div>First brewed: {beer.first_brewed}</div>
                        <div>Description: {beer.description}</div>
                        <div>Abv: {beer.abv}</div>
                        <div>Ibu: {beer.ibu}</div>
                        <div>Target fg: {beer.target_fg}</div>
                        <div>Target og: {beer.target_og}</div>
                        <div>Ebc: {beer.ebc}</div>
                        <div>Srm: {beer.srm}</div>
                        <div>Ph: {beer.ph}</div>
                        <div>Attenuation level: {beer.attenuation_level}</div>
                        <div>
                            Volume: {beer.volume.value}, Unit: {beer.volume.unit}
                        </div>
                        <div>
                            Boil Volume: {beer.boil_volume.value}, Unit: {beer.boil_volume.unit}
                        </div>
                        <div>
                            Method:
                            <div>
                                {beer.method.mash_temp.map((mash, index) => (
                                    <div key={index}>
                                        Temp:
                                        <div>
                                            Value: {mash.temp.value}, Unit: {mash.temp.unit}
                                        </div>
                                        <div>
                                            Duration: {mash.duration}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                Value: {beer.method.fermentation.temp.value}, Unit: {beer.method.fermentation.temp.unit}
                            </div>
                        </div>
                        <div>
                            etc.
                        </div>
                    </div>
                ) : (
                    <div>
                        Loading..
                    </div>
                )}
            </div>
        </div>
    );
};

export default Beer;