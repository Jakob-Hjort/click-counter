import {useState} from "react";
import './Toggle.css'


export default function Toggle(){
    const [isVisible, setisVisible] = useState(false)

    const handleToggle = () => setisVisible((visible) => !visible);
    
    return (
        <div className="toggleBox">
            <button onClick={handleToggle}>
                {isVisible ? "Skjul" : "Vis"} element
            </button>  
        {isVisible && (
            <p className="toggleText">Jeg bliver vist/Skult med state</p>
        )}
        </div>


    )
}