import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"REACT 範例"
        }
    }
    
    render() {
        return (
            <div className="header">
                <h1>{this.state.title}</h1>
                
            </div>
        )
    }
}