import React, {useState, createContext} from 'react';
import './SignIn.css';
import { Redirect } from 'react-router-dom';

export const Store = createContext();
Store.Consumer.displayName = "Store.Consumer";

const SignInT =()=>{

 
    const [data, setData] = useState([]);
    const [auth, setAuth] = useState(false);

    if(auth){
        
        return <Redirect to='/Home'/>
       

    }
    
  const submitChangeHandler = (e) =>{

    e.preventDefault();
    fetch('https://restcountries.com/v2/all?fields=name,region,flag')
        .then(response => {return response.json()})
        .then(data=>{setData(data)});
  }
  


    return (
        <div className="App">
        
        <center>
          <div className="form-f">
            <h1>Sign-In Form</h1>
            <p><strong>New user?</strong><span style={{padding:"10px"}}><a href='www.'>create an account</a></span></p>
            <form action="./Components/HomeT" method='GET' onSubmit={submitChangeHandler}>
              <input type="text" name='username' id='username' placeholder='Username or email' required />
              <br/>
              <input type="password" name='password' id='password' placeholder='Password' required />
              <br/>
              <input type="checkbox" name='checkbox'></input>
              <label htmlFor="checkbox">Keep me signed in</label>
              <br/>

                <button onClick={()=>setAuth(true)}>Sign-In</button>
            </form>
            <p>Or Sign In With</p>
    
    <ul>
      <li>G</li>
      <li>f</li>
      <li>in</li>
      <li>T</li>
    
    </ul>
          </div>
          <div className="data">
            {data.map(item=><li key={item.id}>{item.name}</li>)}
          </div>
          <div className="home">
           
          </div>
          </center>
        </div>
        
      )
  
};

export default SignInT;