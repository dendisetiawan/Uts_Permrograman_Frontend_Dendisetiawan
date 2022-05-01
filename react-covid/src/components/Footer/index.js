import styles from "./Footer.module.css";
function Footer() {
    return (
      
        <div className={styles.container}>
            <footer className={styles.Footer}>
                <h2 className={styles.Footer__title}>Covid App</h2> 
            </footer>
            <p className={styles.Footer__author}>created by Dendisetiawan</p>

            <div>
              <ul className={styles.Footer__list}>
                  <li className={styles.Footer__item}>Home</li>
                  <li className={styles.Footer__item}>Indonesia</li>
                  <li className={styles.Footer__item}>Provinsi</li>
                  <li className={styles.Footer__item}>About</li>
              </ul>
          </div>
        </div>
    );
  }
  
  export default Footer;
  