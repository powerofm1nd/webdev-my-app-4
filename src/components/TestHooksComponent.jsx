import { React, useState, useCallback } from "react"

export function TestHooksComponent()
{
    const [status, setStatus] = useState('Active')

    const printStatusIntoConsole = useCallback(() => {
        console.log("Status: " + status)
    }, [status]);

    return (
        <button onClick={printStatusIntoConsole}>Print status into console</button>
    );
}

export default TestHooksComponent