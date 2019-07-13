import React from 'react';
import { Component } from 'react';


class TextSection extends Component {
   
    render() {
        return(
            <div className={this.props.cssclass1}>
                <h1>{this.props.title}</h1>            
            </div>
        )
    }
}
export default TextSection