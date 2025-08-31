import { useState, useEffect } from "react";

const App = ()=>{
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchUsers = async() => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        console.log(data);
        
        setUsers(data)
        } catch (error) {
        console.error("error", error);
        }
      }

      fetchUsers()


  })
  return(
    <div>
      <h1>List of users</h1>
      <ul>
        {
          users.map((user)=>(
            <li>{user.name}</li>
            
          ))
        }
      </ul>
    </div>
  )
}

export default App;