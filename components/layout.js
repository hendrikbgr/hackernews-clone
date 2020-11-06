import styles from './layout.module.css';
import Navbar from './navbar/navbar.js';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>{children}</div>
        </>
    );
}
