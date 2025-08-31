import { useState } from"react";

function App(){
const [change, setChange] = useState("")
const handleChange =(event)=>{
  setChange(event.target.value)
}
    return(
      <>
  <input type="text" name="" value={change} id="" onChange={handleChange} />
  <p>Hello, {change}</p>

      </>
    )
}

export default App;