import React, { useState } from 'react'

import styles from './Product.module.css'

const Product = (props) => {

  const [title, setTitle] =  useState(props.title);

  const productClickHandler = () => {
    console.log('clicked');
    setTitle('Anonymous');
    console.log(title);
  }

  return (
    <figure onClick={productClickHandler} className={styles.product}>
      <img width="200px" height="150px" src={props.image} alt="gray mustang car" />
      <figcaption>
        <h2>{title}</h2>
        <p>{props.description}</p>
        <h3>${props.price}</h3>
        <button>Buy Now</button>
      </figcaption>
    </figure>
  )
}

export default Product
