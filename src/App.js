import "./App.css";
import React from "react";
import Header from "./component/header.jsx";
import Book from "./component/book.jsx";
import Tag from "./component/tag.jsx";
import Search from "./component/search";
import Loading from "./component/loading";
import BookData from "./repo/constBook";
class App extends React.Component {
  state = {
    search_value: "",
    loading:"none",
    books:[]
  };
  render() {
    return (
      
      <div className="App">
       <Loading show={this.state.loading}/>
        <Header />
        <Search
          value={(value) => {
            this.setState({ search_value: value });
          }}
          onSearch={() => {
            this.state.books=[]
            this.setState({books:this.state.books})
            
            let value = this.state.search_value;
            if(value!==""){
              this.setState({loading:"block"})
              let URL = "https://www.googleapis.com/books/v1/volumes?q=" + value;
            fetch(URL)
              .then((v) => v.json())
              .then((data) => {

                this.setState({loading:"none"})
                data.items.map((item) => {
                  let details = item.volumeInfo;
                  let image=details.imageLinks.smallThumbnail
                  let title=details.title
                  let readlink=details.previewLink
                  let subtitle=(details.subtitle==undefined)? "no subtitle":details.subtitle
                 
                  this.state.books.push(new BookData(title,subtitle,image,readlink))
                });
                this.setState({books:this.state.books})
                new AbortController().abort()
              });
            }
           
          }}
        />
        <div className="content">
          <div className="tags">
            <Tag value="JavaScript"  onClick={()=>{
                  this.state.books=[]
            this.setState({books:this.state.books})
              this.setState({loading:"block"})
              let URL = "https://www.googleapis.com/books/v1/volumes?q=JavaScript";
            fetch(URL)
              .then((v) => v.json())
              .then((data) => {
                this.setState({loading:"none"})
                data.items.map((item) => {
                  let details = item.volumeInfo;
                  let image=details.imageLinks.smallThumbnail
                  let title=details.title
                  let readlink=details.previewLink
                  let subtitle=(details.subtitle==undefined)? "no subtitle":details.subtitle
                 
                  this.state.books.push(new BookData(title,subtitle,image,readlink))
                });
                this.setState({books:this.state.books})
              });
            
            }}    
            />
            <Tag value="Flutter"   onClick={()=>{
                  this.state.books=[]
            this.setState({books:this.state.books})
              this.setState({loading:"block"})
              let URL = "https://www.googleapis.com/books/v1/volumes?q=Flutter";
            fetch(URL)
              .then((v) => v.json())
              .then((data) => {
                this.setState({loading:"none"})
                data.items.map((item) => {
                  let details = item.volumeInfo;
                  let image=details.imageLinks.smallThumbnail
                  let title=details.title
                  let readlink=details.previewLink
                  let subtitle=(details.subtitle==undefined)? "no subtitle":details.subtitle
                
                  this.state.books.push(new BookData(title,subtitle,image,readlink))
                });
                this.setState({books:this.state.books})
              });
            
            }} />
            <Tag value="OOP"   onClick={()=>{
                  this.state.books=[]
            this.setState({books:this.state.books})
              this.setState({loading:"block"})
              let URL = "https://www.googleapis.com/books/v1/volumes?q=OOP";
            fetch(URL)
              .then((v) => v.json())
              .then((data) => {
                this.setState({loading:"none"})
                data.items.map((item) => {
                  let details = item.volumeInfo;
                  let image=details.imageLinks.smallThumbnail
                  let title=details.title
                  let readlink=details.previewLink
                  let subtitle=(details.subtitle==undefined)? "no subtitle":details.subtitle
                 
                  this.state.books.push(new BookData(title,subtitle,image,readlink))
                });
                this.setState({books:this.state.books})
              });
            
            }}  />
            <Tag value="Python"  onClick={()=>{
                  this.state.books=[]
            this.setState({books:this.state.books})
              this.setState({loading:"block"})
              let URL = "https://www.googleapis.com/books/v1/volumes?q=Python";
            fetch(URL)
              .then((v) => v.json())
              .then((data) => {
                this.setState({loading:"none"})
                data.items.map((item) => {
                  let details = item.volumeInfo;
                  let image=details.imageLinks.smallThumbnail
                  let title=details.title
                  let readlink=details.previewLink
                  let subtitle=(details.subtitle==undefined)? "no subtitle":details.subtitle
                 
                  this.state.books.push(new BookData(title,subtitle,image,readlink))
                });
                this.setState({books:this.state.books})
              });
            
            }}  />
          </div>
          <div className="list">
          {
            this.state.books.map((e)=>{
              return <Book
      image={e.image}
      title={e.title}
      subtitle={e.subtitle}
      readlink={e.readlink}
    />
            })
          }
           
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
