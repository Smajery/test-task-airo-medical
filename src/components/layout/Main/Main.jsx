import AppRouter from 'components/AppRouter';
import styles from './Main.module.css';

const Main = () => {
    return (
        <main className={styles.main}>
            <AppRouter />
        </main>
    );
};

export default Main;