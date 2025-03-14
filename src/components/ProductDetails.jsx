import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../products'
import ReviewsDescription from './ReviewsDescription'

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
      <img src="../src/assets/Images/table.jpg" alt="" style={{ width: "101%" }} />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {
              product.length > 0 ? <img src={product[0].imgUrl} alt="" className='h-100' style={{width:"100%"}}/> : ""
            }
          </div>
          <div className="col">
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
                <input className='w-25 mb-3 ' type="text" placeholder='1'/><br />
                <button className='btn btn-primary'>Add to Cart</button>
              </div> : ""
            }
          </div>
        </div>
      </div>
      <br /><br />
      {
        product.length > 0 ? <ReviewsDescription value={product} />:""
      }
    </>
  )
}

export default ProductDetails