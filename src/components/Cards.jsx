import React from 'react'
import { serviceData } from '../products'
const Cards = () => {
    return (
        <>
            <div className="container text-center mb-5 " style={{margin:"0px 0px 0px 110px"}} >
                <div className="row">
                    {

                        serviceData && serviceData.map((ele) => (
                            <div className="col me-4 pt-4 pb-3 " style={{ background: `${ele.bg}`,borderRadius:"5px"}} key={ele.bg}>
                                <span style={{borderRadius:"50%",background:"white" ,padding:"5px 8px",fontSize:"20px"}}>{ele.icon}</span>
                                <br />
                                <h4>{ele.title}</h4>
                                <p>{ele.subtitle}</p>
                            </div>


                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Cards