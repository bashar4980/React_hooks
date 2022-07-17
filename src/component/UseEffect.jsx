import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
  const [photo , setPhoto] = useState(null)

  useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/posts')
           .then((res)=>{return res.json()})
           .then((data)=> {setPhoto(data)
           console.log(photo)
          
          })
  }, [])
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