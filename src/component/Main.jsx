import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Toggle from './Toggle'
import Counter from './Counter'
export class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navlist:[{cid:1,name:"首頁"}, {cid:2,name:"會員列"}, {cid:3,name:"工作"}, {cid:4,name:"站長信箱"}],
        }
    }

    render() {
        return (
            <div>
                <Navbar navlist={ this.state.navlist}></Navbar>
                {/* <Toggle></Toggle> */}
                {/* <Counter></Counter> */}
            </div>

        )
    }
}

export default Main
