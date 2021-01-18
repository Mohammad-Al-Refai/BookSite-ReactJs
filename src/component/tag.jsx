import React from 'react'
import "../App.css";

class Tag extends React.Component{
    render(){
        return(
            <button className="tag" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Tag