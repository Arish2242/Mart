import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'


const Navbar = () => {
    return (
        <>

            <div className='mb-5'>
                <ul className="nav justify-content-end">
                    <li className="nav-item m-3 fs-5 position-absolute top-0 start-0">
                        <img src="https://lms.achieversit.com/assets/images/logo.png" alt="ait" />
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <span aria-current="page" >Home</span>
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <span>Shop</span>
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <span >Cart</span>
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <FaUser />
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <IoCart />
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default Navbar