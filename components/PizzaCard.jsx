import Image from 'next/image'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="pizza" width="200" height="200"/>
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}> Sunt voluptate enim reprehenderit dolore minim nulla labore 
      Lorem nisi ipsum minim. Sunt enim aute aliqua mollit ullamco.</p>̥
    </div>
  )
}

export default PizzaCard
