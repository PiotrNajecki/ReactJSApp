import React from 'react';
import { Component } from 'react';


class Przycisk extends Component {
    
  
  

    render() {
        return(
            <div>
               
                <button onClick={this.props.nameOfFunction}>{this.props.name}</button>            
            </div>
        )
    }
}

export default Przycisk