import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
        }
    }
    handleClick = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {

        return (
            <div className="toggle">
                {this.state.isOpen ? "😸" : "😹"}
                <button onClick={this.handleClick}>切換</button>
            </div>
        )
    }
}
