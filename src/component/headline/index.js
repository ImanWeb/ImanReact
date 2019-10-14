import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const { header, desc } = this.props; // destructuring header and desc from props

        if (!header) {
            return null; // if header returns 'undefined' then we return null and do not render the component
        }

        return (
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string
}

export default Headline;