import React from 'react'
import { CiTextAlignCenter } from 'react-icons/ci';
import { FaShoppingBag } from 'react-icons/fa'

const Footer = () => {
    const style = {
        footercontainer: {
            width: "105%",
            bottom: "0",
            background: "#0d6efd",
            color: "white",
            alignItems: "center"
        },

        footer: {
            display: "flex",
            justify: "center",
            alignItems: "center",
            padding: "10px",
        },

        footerlist: {
            display: "flex",
            justify: "space-around",
            listStyle: "none",
            margin: "0",
            padding: "0",
            width: "80%",

        }
    }
    return (
        <>

            <footer className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2 className="fw-bold">
                                <span role="img" aria-label="cart">🛒</span> Mart
                            </h2>
                            <p className="small">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                            </p>
                        </div>

                       
                        <div className="col-md-3">
                            <h5 className="fw-bold">About Us</h5>
                            <ul className="list-unstyled small">
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        
                        <div className="col-md-3">
                            <h5 className="fw-bold">Customer Care</h5>
                            <ul className="list-unstyled small">
                                <li>Help Center</li>
                                <li>How to Buy</li>
                                <li>Track Your Order</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5 className="fw-bold">Contact Us</h5>
                            <p className="small">
                                70 Washington Square South, New York, NY 10012, United States
                            </p>
                            <p className="small">📧 example@gmail.com</p>
                            <p className="small">📞 +1 1123 456 780</p>
                        </div>
                    </div>
                </div>
            </footer>




        </>
    )
}

export default Footer