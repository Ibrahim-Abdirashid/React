import { useState } from "react";


const ToggleMessage = ()=>{
    const [isVisible, setIsVisible] = useState(false)

        const click = ()=>{
            setIsVisible(!isVisible)
        }
return(
    <div>
        <button onClick={click} value={isVisible}>
            {isVisible ? "show Message" : "hide Message"}
        </button>
        {
            isVisible  && <p>hello</p>
        }
    </div>
)
}
export default ToggleMessage;