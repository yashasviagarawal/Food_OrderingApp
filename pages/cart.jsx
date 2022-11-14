import Image from "next/image";
import React from "react";
import styles from "../styles/cart.module.css";

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>Products</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td>
                <span classNme={styles.name}>Margherita</span>
              </td>
              <td>
                <span classNme={styles.extras}>
                  Double Ingredients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹199</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹398</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td>
                <span classNme={styles.name}>Margherita</span>
              </td>
              <td>
                <span classNme={styles.extras}>
                  Double Ingredients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹199</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹398</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td>
                <span classNme={styles.name}>Margherita</span>
              </td>
              <td>
                <span classNme={styles.extras}>
                  Double Ingredients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹199</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹398</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td>
                <span classNme={styles.name}>Margherita</span>
              </td>
              <td>
                <span classNme={styles.extras}>
                  Double Ingredients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹199</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹398</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td>
                <span classNme={styles.name}>Margherita</span>
              </td>
              <td>
                <span classNme={styles.extras}>
                  Double Ingredients, Spicy Sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>₹199</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₹398</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>₹449.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>₹0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>₹449.00
          </div>
          <button className={styles.button}>Checkout Now!</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
