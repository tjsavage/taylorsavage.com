import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
    <div className={styles.navbar}>
        <div className={styles.navButtonWrap}>
            <p className={styles.homeLink}>Taylor Savage</p>
            <p className={styles.navLink}>Series</p>
            <p className={styles.navLink}>About</p>
        </div>
    </div>
    )
}