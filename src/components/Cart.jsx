import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar';


const Cart = () => {

  const cartData = useSelector(data => data.cart)
  console.log(cartData);

  return (
    <>
      <Navbar />
      <div className="bg-light d-flex justify-content-center align-items-center vh-100">

        <div className="container bg-white p-4 rounded shadow-lg">



          <div className="row">
            <div className="col-md-8">
              <div classNameName="d-flex align-items-center p-3 border rounded">
                <img src={cartData[0].imgUrl} alt="Sofa" className="img-fluid" style={{ width: "80px", height: "50px" }} />
                <div className="ms-3 flex-grow-1">
                  <h5 className="mb-1">Stone and Beam Westview</h5>
                  <p className="text-muted mb-1">$193.00 * <span id="quantity">1</span></p>
                  <p className="fw-bold mb-0" id="total-price">$193.00</p>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-outline-secondary btn-sm me-2" id="increase">+</button>
                  <button className="btn btn-outline-secondary btn-sm" id="decrease">-</button>
                </div>
                <button className="btn btn-close ms-3"></button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border p-3 rounded">
              <h5>Cart Summary</h5>
              <hr />
              <p className="text-muted mb-1">Total Price:</p>
              <p className="fs-4 text-primary fw-bold" id="cart-total">$193.00</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart