import { useState} from "react";
import Array from "./Array";

function App(){
  const [user, setUser] = useState({name :"Ali", age :22})
  const updateAge=()=>{
    setUser({...user,age: user.age + 1})
  }
  return(
    <>
    <p>name: {user.name}, Age {user.age}</p>
    <button onClick={updateAge}>Increse Age</button>

    <Array/>
    </>
  )
}

export default App;