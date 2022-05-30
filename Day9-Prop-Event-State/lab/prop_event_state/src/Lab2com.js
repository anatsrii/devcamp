import React from "react";
class Lab2ComProp extends React.Component {
  render () {
    return ( <>
      <p> This is : {this.props.title}</p>
      <p>Tagname: {this.props.tagname}</p>
      <div>{this.props.children}</div>
    </>)
  }
}

export default Lab2ComProp;