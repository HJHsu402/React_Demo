import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {this.props.name}
                
            </div>
        )
    }
}
Footer.propTypes = {
    name: PropTypes.string
}

