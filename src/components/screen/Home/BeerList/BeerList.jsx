import {useEffect, useRef, useState} from 'react';

import styles from './BeerList.module.css';
import useBeerStore from 'hooks/useBeerStore';
import {checkArr} from 'utils/check-arr';
import BeerItem from './BeerItem/BeerItem';

const BeerList = ({setIsLoadingBeers, selectedBeers, setSelectedBeers}) => {
    const beers = useBeerStore((state) => state.beers);
    const fetchBeers = useBeerStore((state) => state.fetchAllBeers);

    const [page, setPage] = useState(1);
    const [visibleBeers, setVisibleBeers] = useState([]);
    const [startSlice, setStartSlice] = useState(0);
    const [endSlice, setEndSlice] = useState(15);

    const listRef = useRef(null);

    const handleScroll = () => {
        const listElement = listRef.current;
        if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight) {
            if (endSlice + 5 > beers.length) {
                setPage((prevPage) => prevPage + 1);
                setStartSlice(0);
                setEndSlice(15);
            } else {
                setStartSlice((prevStartSlice) => prevStartSlice + 5);
                setEndSlice((prevEndSlice) => prevEndSlice + 5);
            }
        } else if (listElement.scrollTop === 0) {
            if (endSlice === 15 && page !== 1) {
                setPage((prevPage) => prevPage - 1);
                setStartSlice(10);
                setEndSlice(25);
            }  else if (endSlice >= 20) {
                setStartSlice((prevStartSlice) => prevStartSlice - 5);
                setEndSlice((prevEndSlice) => prevEndSlice - 5);
            }
        }
    };

    const handleContextMenu = (item, e) => {
        e.preventDefault();
        if (checkArr(selectedBeers) && selectedBeers.includes(item)) {
            setSelectedBeers(selectedBeers.filter((selectedBeer) => selectedBeer !== item));
        } else {
            setSelectedBeers([...selectedBeers, item]);
        }
    };

    useEffect(() => {
        fetchBeers(page)
            .then(() => {
                setIsLoadingBeers(true);
                console.log('Success!');
                setIsLoadingBeers(false);
            })
            .catch(e => console.error('Something went wrong: ', e));
    }, [page]);

    useEffect(() => {
        const listElement = listRef.current;
        listElement.addEventListener('scroll', handleScroll);
        return () => {
            listElement.removeEventListener('scroll', handleScroll);
        };
    }, [visibleBeers, beers]);

    useEffect(() => {
        setVisibleBeers(beers.slice(startSlice, endSlice));
    }, [beers, endSlice, startSlice]);

    return (
        <ul className={styles.beerList}
            ref={listRef}
        >
            {checkArr(visibleBeers) ? (
                visibleBeers.map((beer, index) => (
                    <BeerItem key={beer.id}
                              index={index}
                              beer={beer}
                              handleContextMenu={handleContextMenu}
                              isSelected={checkArr(selectedBeers) && selectedBeers.includes(beer)}
                    />
                ))
            ) : (
                <li>
                    List is empty
                </li>
            )}
        </ul>
    );
};

export default BeerList;