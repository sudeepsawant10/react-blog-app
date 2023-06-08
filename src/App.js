import logo from './logo.svg';
import './App.css';
import React from "react";

// import component
import BlogCard from './BlogCard';

// function App() {

class App extends React.Component {

  // const blogArr = [
    // class properties
  blogArr = [
  
    {
      title: 'Blog title 1',
      description: 'This is description',
    },
    {
      title: 'Blog title 2',
      description: 'This is description',
    },
    {
      title: 'Blog title 3',
      description: 'This is description',
    }
  ]

  state = {
   showBlogs : true,

  }

  /* JSX in object */
  // We use map to itterate object with jsx
  // const blogCards = blogArr.map((item, pos) => {
  //   return (
  //     <div className="BlogCard" key={pos}>
  //       <div className="BlogCard">
  //         <h3>{item.title}</h3>
  //         <p>{item.description}</p>
  //       </div>
  //     </div>
  //   );
  // })

  // return (
  //   <div className="App">
  //     {blogCards}
  //   </div>
  // )


   blogCards = this.blogArr.map((item, pos) => {
    return (
      // <div className="BlogCard" key={pos}>
      //   <div className="BlogCard">
      //     <h3>{item.title}</h3>
      //     <p>{item.description}</p>
      //   </div>
      // </div>
      <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
    );
  })

  onHideBtnClick = () =>{
    // this.showBlogs = false;
    this.state({showBlogs:false});
  }

  // redner() is called when a component is created or updated.
  render(){

    return (
      // jsc tag
      // <BlogCard />
      <div className='App'>
        {/* component stored in jsx */}
        <button onClick={this.onHideBtnClick}>Hide List</button>
        {this.blogCards}
        {
          this.state.showBlogs ? this.blogCards : null
        }
  
      </div>
    );
  }
  
  
}

export default App;
// You can pass anything to a component
// - it could be a string, no, array, objects, function references 
// - To pass data simply add properties in that component