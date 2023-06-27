import { useState } from 'react';
import './App.css';

function App() {
  const [fname,setfname] = useState("")
  const [lname,setlname] = useState("")
  const [Email,setEmail] = useState("")
  
  const [message,setMessage] = useState("")

  let handleSubmit= async(e) =>{
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    fname: fname,
    lname: lname,
    Email: Email,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response =>{
    if(!response.ok){
      throw Error(response.status);
    }
    return response.json();
  } )
  .then(json =>{
      console.log(json)
      setMessage("user created")

  })

}
  return (
    <div className="App">
      <form onSubmit={handleSubmit} action="" method="post">
        <label>Firstname:</label> 
         <input type="text" value={fname} onChange={(e)=>setfname(e.target.value)}/>
        <label>lastname:</label>
        <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} />
        <label>Email:</label>
        <input type="text"value={Email} onChange={(e)=>setEmail(e.target.value)}/>

        <button type="submit">
          Register
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
