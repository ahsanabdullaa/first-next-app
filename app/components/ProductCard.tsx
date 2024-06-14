import React from 'react'
import AdToCart from './AdToCart'
// import styles from './ProductCard.module.css'
export default function ProductCard() {
  return (
    <div className='p-4 bg-sky-400 text-white text-xl hover:bg-sky-600'>
        <AdToCart />
    </div>
  )
}
