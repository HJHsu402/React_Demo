import React, { Component } from 'react'
export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number:0
        }
    }
    Add=()=>{
        this.setState({number:this.state.number+1})
    }
    Sub=()=>{
        this.setState({number:this.state.number-1})
    }

    render() {
        return (
            <div　className="counter" id="1231">
                <h3>{this.state.number}</h3>
                <button onClick={this.Add}>＋</button>
                <button onClick={this.Sub}>－</button>
            </div>
        )
    }
}
export default Counter
