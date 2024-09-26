import { React, useState } from "react";

export function MyFuncComponent()
{
    const [counter, setCounter] = useState(0)
    
    function handleClick()
    {
        setCounter(counter + 1)
    }

    return (
    <>
        <h1>Count: {counter}</h1>    
        <button onClick={handleClick}>Add one</button>
    </>
    );

}

export default MyFuncComponent;