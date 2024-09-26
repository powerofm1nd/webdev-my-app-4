import { React, useEffect } from "react"

export function TestUseEffects({onHide})
{
    useEffect(()=>{
        console.log("It's use effect! (func1)");
    }, []);
    
    useEffect(()=>{
        console.log("It's use effect! (func2)");
        return(()=>{ console.log('useEffect (func2) - has cleared') });
    }, []);

    return (
        <>
            <p>TestUseEffects component</p>
            <button onClick={onHide}>Hide (Call Unmount)</button>
        </>
    );
}

export default TestUseEffects