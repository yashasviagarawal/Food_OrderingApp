import Image from 'next/image'
import React, {useState} from 'react'
import styles from '../styles/Featured.module.css'

const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/featured.png",
        "/img/featured1.png",
        "/img/featured2.png",
    ];
    const handleArrow = (direction)=>{
        if(direction==="l"){
            setIndex(index !==0?index-1:2)
        }
        if(direction==="r"){
            setIndex(index !==2?index+1:0)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.arrowcontainer} style={{left:0}} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="arrowleft" layout="fill" objectFit='contain'/>
        </div>
     
      <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
            {images.map((img, i)=>(
        <div className={styles.imgcontainer} key={i}>
                <Image src={img}  alt="" layout='fill' objectFit='contain'/>
            
        </div>
                ))}
      </div>
      <div className={styles.arrowcontainer} style={{right:0}} onClick={()=>handleArrow("r")}>

      <Image src="/img/arrowr.png" alt="arrowright" layout='fill' objectFit='contain'/>
      </div>
    </div>
  )
}

export default Featured
