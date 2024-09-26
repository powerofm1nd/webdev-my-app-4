import { React, useEffect, useState } from "react"

export function TestUseEffectWithDependency()
{
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log("It's use effect! (TestWithDependency)");
    }, [counter]);
    
    return (
        <>
            <p>TestUseEffects component</p>
            <button onClick={()=>{setCounter(counter + 1)}}>TestUseEffectWithDependency: {counter}</button>
        </>
    );
}

export default TestUseEffectWithDependency