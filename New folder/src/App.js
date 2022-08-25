import React from 'react'
import "./styles.css";
import From from './Form.jsx'
export default function App() {
  const [name,setName]= React.useState("")
  function handleAdd(text){
        setName(text)
  }
 
 
 
 return (
    <div className="App">
     <From handleAdd={handleAdd}/>
    <br/>
    <h1>Name:{name}</h1>
    </div>
  );
}
