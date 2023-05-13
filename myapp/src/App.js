
import './App.css';
import axios from "axios";
import React , { useEffect,useState} from 'react';
import ListOfUsers from "./ListOfUsers"
function App() {
const[users,setUsers]=useState([])

useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users").then((result) =>{
setUsers(result.data);

})

},[])
  return (
    <div className="App">
      {users.map((id,user)=>(
        <ListOfUsers key={id} user={user}/>
      ))}
    </div>
  );
}

export default App;
