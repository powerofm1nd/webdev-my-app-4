import React from "react";

export class MyClassComponent extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            counter: 0
        }
    }

    addOne = () => 
    {
        this.setState({counter: this.state.counter + 1})
    }

    render()
    {
        return (
            <>
                <h1>Count: {this.state.counter}</h1>    
                <button onClick={this.addOne}>Add one</button>
            </>
        );
    }
}

export default MyClassComponent;