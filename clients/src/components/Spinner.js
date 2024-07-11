import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Spinner = ({path="login"}) => {

   const [count,setCount] = useState(3);
   const navigate = useNavigate();

   const location = useLocation();

   useEffect(()=>{
    const interval = setInterval(()=>{
        setCount(prev =>  --prev);
    },1000)

    count ===0 && 
    navigate(`/${path}`,{
        state : location.pathname,
    })

    return ()=> clearInterval(interval)
   },[count,navigate,location])

    return (
        <div className="d-flex justify-content-center align-items-center">
       <h1 className='Text-center'>redirecting to you in {count} second </h1> 

            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
