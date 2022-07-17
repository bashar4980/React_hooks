import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const userInfo ={
        name:'',
        email: '',
        password: ''
    }
    const [count, setCount] = useState(0);
    const [user, setName] = useState(userInfo);
    const { name, email, password } = user
    const Increment = () => {
        setCount(count + 1)
    }
    // const changeInputname = (e) => {

    //     setName({ name: e.target.value , email , password})
    //     console.log(e.target.name)

    // }
    // const changeInputemai= (e) => {

    //     setName({name , email: e.target.value  , password})
    //     console.log(e.target.name)

 
    // }
    // const changeInputpassword= (e) => {

    //     setName({ name , email , password: e.target.value })
    //     console.log(e.target.name)


    // }
    const changeInput = e =>{
        setName({...user , [e.target.name]:e.target.value})
    }
 
    const formSubmit = e => {
        e.preventDefault();
        console.log(user);
        setName(userInfo)
    
        
       
    
    }
    return (
        <div>
            <h1>I am Count useState {count}</h1>
            <button onClick={Increment}>count+</button>
            <br />
            <br />
            <form action="" onSubmit={formSubmit}>
                <input type="text" name='name' value={name} onChange={changeInput} placeholder="Name" /><br /><br />
                <input type="email" name='email' value={email} onChange={changeInput} placeholder="email" /> <br />
                <br />
                <input type="password" name='password' value={password} onChange={changeInput} placeholder="password" /><br /><br />
             
                <input type="submit" />
            </form>
        </div>
    )
}

export default UseState