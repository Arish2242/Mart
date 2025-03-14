import React, { useState } from 'react'

const ReviewsDescription = ({ value }) => {
    const [reviewproduct, setreviewproduct] = useState(value)
    const [description , setdescription]=useState("description")
    const descriptionHandler= (state)=>{
       setdescription(state)
      
    }

    
    return (
        <div className='ms-5'>

            <div>
                <div className='d-flex'>
                 <p  style={{ border: "none", color: description==="description"?"black":"grey",cursor:"pointer"}} onClick={()=>descriptionHandler("description")} >Description</p>
                <p className='ms-2' style={{ border: "none", color: description==="reviews"?"black":"grey",cursor:"pointer"}} onClick={()=>descriptionHandler("reviews")}>Reviews</p>
                </div>
               {
                description=="description"?<p >{reviewproduct[0].description}</p>:
                reviewproduct[0].reviews.map((ele)=>(
                    <div>
                    <h5 style={{color:"yellow"}}>Jhon Doe</h5>
                    <aside>{ele.rating} (rating)</aside>
                    <p>{ele.text}</p>
                    </div>
                ))

               }
            </div>
        </div>
    )
}

export default ReviewsDescription