import React from 'react'

class Search extends React.Component{
    
   
 
    render(){
        return(
            <div className="search">
           <div>
           <input placeholder="type words to search"  onChange={(e)=>{
               this.setState({value:e.target.value})
               this.props.value(e.target.value)
               
               console.log(e.target.value)
           
           }
              }
           ></input>
            <button onClick={this.props.onSearch}>search</button>
           </div>
            </div>
        )
    }
}


export default Search