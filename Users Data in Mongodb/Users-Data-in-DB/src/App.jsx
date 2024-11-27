import axios from 'axios'
import React, { useEffect, useState } from 'react'



const App = () => {

const [data,setdata] = useState()

  useEffect(()=>{
    const Getdata = async ()=>{
      const data = await axios('http://localhost:5000/users')
      .then((res)=>{
        setdata(res.data.user)
        
      })
      .catch((error)=>{
       console.log("error  => " , error);
        
      })


    }
    Getdata()

  },[])

  return (

    <div>App</div>
  )
}

export default App