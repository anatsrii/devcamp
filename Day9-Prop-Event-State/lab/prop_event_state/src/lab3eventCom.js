import React from "react";

class Lab3 extends React.Component {
  constructor (props) {
    super (props);
    this.state = ({ list: [
      { id: 1, name: "Josept" },
      { id: 2, name: "Kitty" },
      { id: 3, name: "Thomas" },
      { id: 4, name: "Donal" },
    ]})
  }
  deleteName = (e, id, name)=> {
    alert(`You delete ${name}`);
    let newList = this.state.list
    // console.log(id);
    let newId = id - 1;
    let member = newList.filter((obj, i) => i !== newId )
    console.log(member)
    this.setState({list: member});

 }
  render () {
    const employeeList = this.state.list;
    let showEmployee = employeeList.map((x)=> <p key={x.id}>Name : {x.name}  <button onClick={(e)=>this.deleteName(e, x.id, x.name)}>delete</button></p>)
    return (<>
    <div>{showEmployee}</div>
    </>)
  }

}

export default Lab3;
