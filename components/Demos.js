import React from "react";
import styles from "../styles/Demos.module.scss";

const Demos = () => {
  return (
    <div className={styles.demosSection}>
      <div className={styles.demosContainer}>
        <div className={styles.demosTitle}>Content Demos</div>
        <h2>
          Beautifully crafted <span>demos</span> to <br /> help you get started.
        </h2>
        <div className={styles.sectionSubtitle}>
          Its incredbly easy to get your job board website up and running
        </div>
        <div className={styles.sectionNumber}>
          <div className={styles.number}> 07+</div>
        </div>
      </div>
    </div>
  );
};

export default Demos;