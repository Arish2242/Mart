import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products'
import ReviewsDescription from './ReviewsDescription'
import Liked from './Liked'

const ProductDetails = () => {
  const [product, setproduct] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const prod = products.filter((ele) => {
      return ele.id === id
    })
    setproduct(prod)
  }, [])

  return (
    <>
      <img src="../src/assets/Images/table.jpg" alt="" style={{ width: "100%", position: 'relative', bottom: "47px" }} />
      <div className="overlay" style={{ position: "absolute", top: "77px", left: "0", width: "100%", height: "227px", background: " rgba(0, 0, 0, 0.6)" }} ></div>
      {
        product.length > 0 ? <h2 style={{ textAlign: "center", position: 'relative', bottom: '175px', color: "white" }}>{product[0].productName}</h2> : ""
      }


      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            {
              product.length > 0 ? <img src={product[0].imgUrl} alt="" className='h-100' style={{ width: "100%", position: 'relative', right: '60px', bottom:'60px' }} /> : ""
            }
          </div>
          <div className="col-6">
            {
              product.length > 0 ? <div className='mt-5' style={{ textAlign: "left" }}>
                <h2 >{product[0].productName}</h2>

                <div style={{ display: "flex" }} className='mt-3'>
                  <ion-icon name="star" style={{ margin: "7px 2px", color: "yellow" }}></ion-icon>
                  <ion-icon name="star" style={{ margin: "7px 2px", color: "yellow" }}></ion-icon>
                  <ion-icon name="star" style={{ margin: "7px 2px", color: "yellow" }}></ion-icon>
                  <ion-icon name="star" style={{ margin: "7px 2px", color: "yellow" }}></ion-icon>
                  <ion-icon name="star" style={{ margin: "7px 2px", color: "yellow" }}></ion-icon>
                  <aside className='ms-3 m-1'>{product[0].avgRating} ratings</aside>
                </div>
                <div style={{ display: "flex" }} className='mt-3'>
                  <h2>{product[0].price}$</h2>
                  <span className='ms-5 m-1 fs-5'>category:{product[0].category}</span>
                </div>
                <p className='mt-3'>{product[0].shortDesc}</p>
                <input className='mb-3' type="number" placeholder='1' style={{ width: '75px',borderRadius: '5px',border: '1px solid black',padding: '1px 11px'}}/><br />
                <button className='btn btn-primary'>Add to Cart</button>
              </div> : ""
            }
          </div>
        </div>
      </div>
      <br /><br />
      {
        product.length > 0 ? <ReviewsDescription value={product} /> : ""
      }
      <br /><br />
      {
        product.length > 0 ? <Liked value={product} /> : ''
      }
    </>
  )
}

export default ProductDetails