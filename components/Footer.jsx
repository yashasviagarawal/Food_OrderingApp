import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Image src="/img/bg.png" alt="" layout="fill" />
      </div>
      <div className={styles.items}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Minim consectetur consectetur exercitation eiusmod adipisicing do
            irure ipsum dolore ea laborum culpa adipisicing sint.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our Restaurants</h1>
          <p className={styles.text}>
            13, abc road,
            <br /> Dehradun, 256722
            <br /> +91 9837564201
          </p>
          <p className={styles.text}>
            13, abc road,
            <br /> Dehradun, 256722
            <br /> +91 9837564201
          </p>
          <p className={styles.text}>
            13, abc road,
            <br /> Dehradun, 256722
            <br /> +91 9837564201
          </p>
          <p className={styles.text}>
            13, abc road,
            <br /> Dehradun, 256722
            <br /> +91 9837564201
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working hours</h1>
          <p className={styles.text}>
            Sat - Sun
            <br /> 10:00 am - 10:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
