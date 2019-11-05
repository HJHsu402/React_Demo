import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        const {navlist}=this.props
        return (
            <ul>
                {
                    navlist.map(d=><li key={d.cid}><span onClick={()=>console.log(d)}>{d.name}</span></li>)
                }
            </ul>
        )
    }
}

export default Navbar
