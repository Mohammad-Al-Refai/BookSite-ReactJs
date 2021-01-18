
import logo from '../books.svg'
import "../App.css";
import React from 'react'
class Header extends React.Component{
    render(){
        return(<header className="App-header">
        <img src={logo} className="App-logo"  alt="logo" />
      </header>)
    }
}


export default Header