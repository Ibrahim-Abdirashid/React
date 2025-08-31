// import { useEffect, useState } from "react";
import WindowResize from "./WindowResize";
import Timer from "./Timer"

function App(){
  // const [ title, setTitle] = useState("hello, react")
  // const [name, setName] = useState("hamuda")

  // useEffect(()=>{
  //   document.title = title;
  // },[title]);

  return (
    <>
    {/* <div>
      <h1>type to change document title:</h1>
      <input type="text" name="" id="" value={name} onChange={(e)=> setName(e.target.value)} placeholder="name" />
      <input type="text" name="" id="" value={title} onChange={(e)=> setTitle(e.target.value)}placeholder="title" />
    </div> */}
  <WindowResize/>
  <Timer/>
  </>
  )
}

export default App;