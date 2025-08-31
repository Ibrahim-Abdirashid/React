import { useState } from "react";
import Greeting from "./Greeting";


function App(){
const [isLoggedIn, setIsLoggedIn] = useState(false)
  return(
<Greeting  isLoggedIn = {isLoggedIn}/>
  )
}

export default App;