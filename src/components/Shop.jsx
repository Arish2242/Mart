import React from 'react'
import Navbar from './Navbar'

const Shop = () => {
  return (
    <> 
       <Navbar />
       <img src="../src/assets/Images/table.jpg" alt="" style={{ width: "100%", position: 'relative', bottom: "47px" }} />
      <div className="overlay" style={{ position: "absolute", top: "77px", left: "0", width: "100%", height: "227px", background: " rgba(0, 0, 0, 0.6)" }} ></div>
      <h2 style={{ textAlign: "center", position: 'relative', bottom: '175px', color: "white" }}>Product  </h2>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </>
  )
}

export default Shop