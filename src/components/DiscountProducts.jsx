import React from 'react'
import { discoutProducts } from '../products'
import { CiCirclePlus } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const DiscountProducts = () => {
    
  
    const notify = () => toast.success("Product has been added to cart!");

    const styles = {
        discount: {  background: "SlateBlue", padding: "3px 6px", margin: "20px 20px", borderRadius: "25px", color: "white", position: "relative",top:"15px" },

    }

    return (
        <>
            <div style={{ background: "#E6E6FA", borderRadius: "10px" }} className='object-fit-cover ms-2'>
                <br />
                <h2 style={{ textAlign:"center"}}>Big Discount</h2><br /><br /><br />
                <div className="row md-3 g-4 ms-5 me-5">
                    <div className="row ms-1">
                        {
                            discoutProducts && discoutProducts.map((ele) => (
                                <div className="col-4 " style={{ height: "520px" }} key={ele.id}>
                                    <div className="card ">
                                        <Link to={`/productdetails/${ele.id}`} style={{ textDecoration: "none", color: "black" }}>
                                            <span style={styles.discount} >{ele.discount}% Off</span>
                                            <img src={ele.imgUrl} className="card-img-top " alt="..." style={{ height: "300px" }} />
                                            <div className="card-body">
                                                <h5 className="card-title">{ele.productName}</h5>
                                                <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                                <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                                <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                                <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                                <ion-icon name="star" style={{ margin: "1px", color: "yellow" }}></ion-icon>
                                                <p className="card-text" style={{ fontSize: "30px" }}>{ele.price} $</p>
                                            </div>
                                        </Link>
                                        <CiCirclePlus style={{ fontSize: "40px", position: "relative", left: "290px", bottom: "57px" }} onClick={notify} />
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

export default DiscountProducts