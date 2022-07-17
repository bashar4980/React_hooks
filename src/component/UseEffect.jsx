import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
  const [photo , setPhoto] = useState(null);
  const [errors , setError] = useState(null);
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/posts')
           .then((res)=>{
           
              if(res.ok){
                return res.json()
              }
              throw res;
           
           })
           .then((data)=> {setPhoto(data)
            setError(null)
          
          })
          .catch((error)=>{
            console.error("error is fetvhing data" , error)
            setError(error)
          
          })
          .finally(()=>{
            setLoading(false)
          })
  }, [])
  if(errors) return ("Error is fetching for data");
  if(loading) return ("Loading.....")
  return (
    <>
    <h1>Fetch Api UseEffect</h1>
  
    {photo && photo.map((item)=>{
       return(
        <div key={item.id} style={{width:"400px" , margin: " 100px auto"}}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                  
       </div>
       )
    })}
    

    
    </>
  )
}

export default UseEffect