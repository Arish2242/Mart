import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar';
import { remove } from '../Redux/cartSlice';

const Cart = () => {
  const cartData = useSelector(data => data.cart)

const dispatch= useDispatch()

  const RemoveHandler=(id)=>{
    dispatch(remove(id))
  }
  return (
    <>
      <Navbar />
      <div className="bg-light d-flex">
        <div className="container bg-white p-4 rounded shadow-lg">
          {cartData.length > 0 ? (
            cartData.map((ele) => (
              <div className="row mb-3" key={ele.id}>
                <div className="col-md-11 ms-4">
                  <div className="d-flex align-items-center p-3 border rounded">
                    <img
                      src={ele.imgUrl}
                      alt={ele.name}
                      className="img-fluid"
                      style={{ width: "205px", height: "180px" }}
                    />
                    <div className="ms-3 flex-grow-1">
                      <h5 className="mb-1">{ele.productName}</h5>
                      <div className='d-flex'>
                        <p className="text-muted mb-1">
                          {`$ ${ele.price}* ${ele.qty}`}
                        </p>
                        <p className="fw-bold mb-0 ms-3">
                          {`$ ${ele.price}`}
                        </p>
                      </div>

                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2 me-4"
                      >
                        +
                      </button>
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                      >
                        -
                      </button>
                    </div>
                    <button className="btn btn-close ms-3 " style={{position:"relative",bottom:'70px'}} onClick={() =>  RemoveHandler(ele.id) }></button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center">Cart is Empty</h3>
          )}
        </div>
        <div className="col-md-4">
          <div className="border p-3 rounded">
            <h5>Cart Summary</h5>
            <hr />
            <p className="text-muted mb-1">Total Price:</p>
            <p className="fs-4 text-primary fw-bold">$234</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart