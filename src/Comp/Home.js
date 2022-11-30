import React from 'react'
import Products from './Products'


export default function Home() {
  return (
    <>
    <div className='hello'>
    <div class="card text-bg-light">
  <img src="../assests/img/4.jpg" class="card-img" alt="Background"/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className='container'>
    <h5 class="card-title display-3 fw-bolder mb-0">TRENDING SEASON ARRIVAL</h5>
    <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
  </div>
  </div>

</div>

 </div>
 <Products/>

    </>
  )
}
