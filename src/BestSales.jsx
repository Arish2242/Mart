import React, { useEffect, useState } from 'react'
import { products } from './products'
import { CiCirclePlus } from 'react-icons/ci'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

const BestSales = () => {
    const [BestSales, setBestSales] = useState([])
    useEffect(() => {
        const filteredProducts = products.filter((ele) =>
            ele.category == "sofa"
        )
        setBestSales(() => filteredProducts)

    }, [])

    const notify = () => toast.success("Product has been added to cart!");

    const styles = {
        discount: { width: "70px", background: "SlateBlue", padding: "3px 6px", margin: "10px 20px", borderRadius: "25px", color: "white" },

    }

    return (
        <>
            <div style={{ background: "#E6E6FA", borderRadius: "10px" }} className='object-fit-cover'>
                <br />
                <h2 style={{ textAlign: "center" }}>Best Sales</h2><br /><br /><br />
                <div className="row md-3 g-4 ms-5 me-5">
                    <div className="row ms-1">
                        {
                            BestSales && BestSales.map((ele) => (
                                <div className="col-4 mb-5 " style={{ height: "600px" }} key={ele.id}>
                                    <div className="card ">
                                    <Link to="/ProductDetails" style={{textDecoration:"none",color:"black"}}>
                                        <img src={ele.imgUrl} className="card-img-top " alt="..." style={{ height: "400px" }}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{ele.productName}</h5>
                                            <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                            <ion-icon name="star" style={{ margin: "1px", color: "yellow", color: "yellow" }}></ion-icon>
                                            <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                            <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                            <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                            <p className="card-text" style={{ fontSize: "30px" }}>{ele.price} $</p>
                                           
                                        </div>
                                        </Link>
                                        <CiCirclePlus style={{ fontSize: "40px", position: "relative", left: "290px", bottom: "57px" }}  onClick={notify}/>
                                        <ToastContainer />
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSales