import React from "react";

class Loading extends React.Component {
   
  render() {
      
    return (
      <div className="loading_parent" style={{display:this.props.show}}>
        <div className="loading">
          <div>
            <div className="c"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
