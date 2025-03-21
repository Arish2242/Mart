import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { products } from '../products'
import { Link } from 'react-router-dom'
import { CiCirclePlus, CiSearch } from 'react-icons/ci'
import { toast, ToastContainer } from 'react-toastify'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/cartSlice'

const Shop = () => {

  const [filterProds ,setfilterProds] =useState([])
  const [category , setcategory] =useState("Filter By Category")

  useEffect(()=>{
    window.scrollTo(0, 0);
  const SofaProd=products.filter((ele)=>
    ele.category=="sofa"
  )
  setfilterProds(SofaProd)
},[])
console.log(filterProds);



  const  CategoryHandler=(e)=>{
   const selectedCate=e.target.innerText
   setcategory(selectedCate)
   const filteredproducts=products.filter((ele)=>
  ele.category==selectedCate.toLowerCase())
   setfilterProds(filteredproducts)
  }

  const SearchHandler=(e)=>{
    const searchStr=e.target.value
    const searchProds=products.filter((ele)=>      
      ele.productName.toLowerCase().includes(searchStr.toLowerCase()))
  
  
    
    setfilterProds(searchProds)
    
  }

  const dispatch = useDispatch()

  const AddToCart =(product)=>{
    dispatch(add(product))
    toast.success("Product has been added to cart!");
  }
const styles={
  input:{borderRadius:'20px', border:'1px solid ', width:'570px', margin:'0px 0px 0px 350px', height:'35px', background:'lightgrey' ,padding:'5px 15px'}}
  return (
    <>
      <Navbar />
      <img src="../src/assets/Images/table.jpg" alt="" style={{ width: "100%", position: 'relative', bottom: "47px" }} />
      <div className="overlay" style={{ position: "absolute", top: "77px", left: "0", width: "100%", height: "227px", background: " rgba(0, 0, 0, 0.6)" }} ></div>
      <h2 style={{ textAlign: "center", position: 'relative', bottom: '175px', color: "white" }}>Product  </h2>
      <div className="dropdown ms-5 " style={{display:'flex'}}  >
        
      <button style={{backgroundColor:"darkblue",marginLeft:"28px",width:"250px",display: "flex", justifyContent: "space-between",  alignItems: "center",}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span style={{flex: 1, textAlign: "left"}}>{category}</span> <span style={{flex: 1, textAlign: "right"}}>|</span>
  </button>
        <ul className="dropdown-menu"  onClick={(e)=>CategoryHandler(e)} >
          <li><a className="dropdown-item" href="#" >Sofa</a></li>
          <li><a className="dropdown-item" href="#">Chair</a></li>
          <li><a className="dropdown-item" href="#">Watch</a></li>
          <li><a className="dropdown-item" href="#">Mobile</a></li>
          <li><a className="dropdown-item" href="#">Wireless</a></li>
        </ul>
        <input type="text" style={styles.input}  placeholder='Search...'  onChange={(e)=>SearchHandler(e)}/>
        <CiSearch  style={{fontSize:"22px",position:'relative',right:'37px',top:'7px'}}/>
      </div>
      <br />
      <br />
      <div className="row md-3 g-4 ms-5 me-5">
      <div className="row ms-1">
      {
        filterProds ?  filterProds.map((ele) => (
          <div className="col-4 " style={{ height: "520px" }} key={ele.id}>
              <div className="card ">
                  <Link to={`/productdetails/${ele.id}`} style={{ textDecoration: "none", color: "black" }}>
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
                  <CiCirclePlus style={{ fontSize: "40px", position: "relative", left: "290px", bottom: "57px" }} onClick={ ()=> AddToCart(ele) } />
                  <ToastContainer />
              </div>
          </div>
      )) : ""
      }
      </div>
      </div>
     <Footer />
    </>
  )
}

export default Shop