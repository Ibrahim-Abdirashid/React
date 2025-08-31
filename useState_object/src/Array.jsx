import { useState } from "react";

function Array(){
    const [items, setItems] = useState(["banana", "mango"]);

    const addItem =()=>{
        setItems([...items, "orange"] )
    }
    return(
        <>
    <ul>
      {items.map(item =>(
        <li>{item}</li>
      ))}
    </ul>
    <button onClick={addItem}>Add Orange</button>
        </>
    )
}

export default Array;