// import React from "react";
// import styles from "../../assets/styles/Preloader.module.css";


// const Preloader: React.FC = () => (
//   <div className={styles.preloader}>
//     <div className={styles.loader}></div>
//   </div>
// );

// export default Preloader;
import React, { useEffect } from "react";
import styles from "../../assets/styles/Preloader.module.css";

const Preloader: React.FC = () => {
  useEffect(() => {
    document.body.classList.add(styles.loaded_hiding);
    
    const timer = setTimeout(() => {
      document.body.classList.add(styles.loaded);
      document.body.classList.remove(styles.loaded_hiding);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove(styles.loaded, styles.loaded_hiding);
    };
  }, []);

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__row}>
        <div className={styles.preloader__item}></div>
        <div className={styles.preloader__item}></div>
      </div>
    </div>
  );
};

export default Preloader;