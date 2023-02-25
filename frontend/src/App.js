
import { useState } from 'react';

import axios from 'axios';


function App() {

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
  } 

  const registred = {
    fullName: fullName,
    userName: userName,
    email: email,
    password: password
  }

  try{
    axios.post('http://localhost:4000/app/singup', registred)
    .then(respone => console.log(respone.data));

  }catch(error){
    console.log(error)
  }

  console.log(fullName)
  

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit} >

          <input type = 'text'onChange={(e)=>{setFullName(e.target.value)}}/>
          <br/>
          <input type = 'text'onChange={(e)=>{setUserName(e.target.value)}}/>
          <br/>
          <input type = 'text'onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          <input onChange={(e)=>{setPassword(e.target.value)}}/>
          <br/>
          <button type='submit'>Submit Data</button>
        </form>
        {/* <h1>Hello</h1> */}
      </div>
      
    </div>
  );
}

export default App;
