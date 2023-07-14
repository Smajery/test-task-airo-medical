import {useNavigate} from 'react-router-dom';

import styles from './BeerItem.module.css';

const BeerItem = ({beer, handleContextMenu, isSelected, index}) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem('beerId', beer.id)
        navigate(`beer/${beer.id}`);
    };
    const handleContextMenuItem = (e) => {
        handleContextMenu(beer, e)
    }

    return (
        <li onClick={handleClick}
            onContextMenu={handleContextMenuItem}
            className={`${styles.beerItem} ${isSelected && styles.selected} ${index % 2 === 0 ? styles.greyBackground : styles.whiteBackground}`}
        >
            {beer.name}
        </li>
    );
};

export default BeerItem;