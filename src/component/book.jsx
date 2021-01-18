import React from "react";
import "../App.css";

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="face">
          <div className="details">
            <p style={{fontSize:"20px"}}>{this.props.title}</p>
          
            <p style={{fontSize:"14px"}}>{this.props.subtitle}</p>
            <button onClick={()=>{
              window.open(this.props.readlink)
            }}>Read</button>
          </div>
        </div>
        <img src={this.props.image}></img>
      </div>
    );
  }
}

export default Book;
