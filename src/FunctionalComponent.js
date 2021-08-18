import { useState, useEffect } from "react";

const FunctionalComponent = (props)=>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("useeffect")
        return()=>{
            console.log("functionalcomponentwillunmount");
        }
    },[counter]);

    const increase =()=>{
        setCounter(counter+1);
    }
    const decrease =()=>{
        setCounter(counter-1);
    }
    const reset =()=>{
        setCounter(props.counter);
    }
    return(
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter:{counter}</p>
            <button onClick={()=>increase()}>İncrease</button>
            <button onClick={()=>decrease()}>Decrease</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}
FunctionalComponent.defaultProps={
    counter:0
}

export default FunctionalComponent;