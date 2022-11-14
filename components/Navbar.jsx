import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image
            src="/img/telephone.png"
            alt="Call Us"
            width="50"
            height="50"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>+91 9876543210</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className = {styles.list}>
        <li className={styles.listitem}>Homepage</li>
        <li className={styles.listitem}>Products</li>
        <li className={styles.listitem}>Menu</li>
        <div className={styles.logo}><Image src="/img/logo.png" alt="logo" width="100" height="70" /></div>
        <li className={styles.listitem}>Events</li>
        <li className={styles.listitem}>Blogs</li>
        <li className={styles.listitem}>Contact</li>
        </ul>
        
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src = "/img/cart.png" alt="cart" width="100" height="100"/>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
