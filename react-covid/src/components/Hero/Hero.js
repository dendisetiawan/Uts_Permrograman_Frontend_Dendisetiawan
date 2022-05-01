import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles.Hero}>
            <section className={styles.Hero}>
                <div>
                    <h2 className={styles.Hero__title}>Indonesia</h2>
                    <h3 className={styles.Hero__genre}>Data Covid  Berdasarkan Global</h3>
                      <div className={styles.indonesia_container}>
                          <div className={styles.card}>
                              <div className="card"> <h1><b>Sembuh</b></h1>
                              <p>6.005.646</p>
                                  <div className="container">

                                  </div>
                              </div>
                              
                          </div>
                          <div className={styles.card}>
                              <div className="card"> <h1><b>Dirawat</b></h1>
                              <p>100.000</p>
                                  <div className="container">

                                  </div>
                              </div>
                              
                          </div><div className={styles.card}>
                              <div className="card"> <h1><b>Meninggal</b></h1>
                              <p>10.000</p>
                                  <div className="container">

                                  </div>
                              </div>
                              
                          </div>
                      </div>
                </div>
                
   
            </section> 
        </div>
    );
}

 export default Hero;
  