import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styles from "../stylings/Navbar.module.css"


const Navbar = () => {
    return (
        <>

            <div className='mb-5 shadow py-2'>
                <ul className={`${styles.ulParent} nav justify-content-end`}>
                    <li className="nav-item m-3 fs-5 position-absolute top-0 start-0">
                        <img src="https://lms.achieversit.com/assets/images/logo.png" alt="ait" className='w-75'/>
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li className="nav-item m-3 fs-5">
                        <Link  to='/cart'>Cart</Link>
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