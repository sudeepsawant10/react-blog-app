import React from "react";
import "./App.css";

// function based component
// standard properties = props
const BlogCard = (props) => {
  console.log(props)

  return (
    <div className="BlogCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
