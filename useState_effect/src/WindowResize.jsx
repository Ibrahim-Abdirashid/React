import { useState, useEffect } from "react";

const WindowResize= ()=>{

    const [ width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = ()=> setWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    })

    return(
        <div>
                    <p>the page width is {width}px</p>

        </div>
    )
}

export default WindowResize;