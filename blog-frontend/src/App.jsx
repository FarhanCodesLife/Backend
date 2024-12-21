import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { use } from 'react'

const App = () => {
const [data,setdata] = useState([])
  useEffect(()=>{
   async function datafetch(){
      
      const blogs = await fetch("http://localhost:4000/api/user/allblogs")
      .then((res)=>res.json())
      .then((data)=>{setdata(data)}).then((data)=>console.log(data) )
    }
  
    datafetch()
  }
 ,[]) 
// console.log(data);

  const addlike = (postId,autorId)=>{
    console.log(postId,autorId);
    
    axios.post(`http://localhost:4000/api/user/likepost/`,{
      postId,
  autorId

    }).then((data)=>{console.log(data)
      datafetch()
    })

  }


  const addcomment = (postId,autorId)=>{
    console.log(postId,autorId);
    
  
  }


  return (
    <>
    <div>App</div>
    <div className='flex w-full container  m-auto flex-wrap'>
      {data && data.map((blog)=><div key={blog._id} className='bg-slate-400 m-auto p-4  w-1/2  flex justify-between  border'>
       <div className=' '>
         <h1 className='text-2xl p-2'>
          {blog.title}
        </h1>
        <p>
          {blog.content}
        </p>
        <div className=' flex flex-row gap-5'>

        <button className='py-2 px-4 bg-blue-400 rounded-xl border mt-4' onClick={()=>{addlike(blog._id,blog.authorId)}} >  {blog.like.length} like</button>
        {/* <button className='py-2 px-4 bg-gray-500 rounded-xl border mt-4'onClick={()=>{addcomment(blog._id,blog.authorId)}} >{blog.comments.length}comments</button> */}
        </div>
        </div>
        
        
        </div>)}
    </div>
    </>
  )
}

export default App