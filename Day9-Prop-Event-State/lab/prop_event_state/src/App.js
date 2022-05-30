import React from 'react'
import './App.css';
import ClassSendProp from './Test';


const NameFuncProp = (props) => {
  console.log(props)
  return (<> <p> Firstname : {props.firstname} </p> 
  <p> Lastname : {props.lastname}</p>
  </>)
}

 class NameClassProp extends React.Component {
  render () {
    console.log(this.props)
    return <> <p>  This is class Component props </p>
    <p> Firstname : {this.props.firstname} </p>
    <p> Lastname : {this.props.lastname} </p>
    </>
  }
 }

 const ChildrenFuncProp = (props) => {
   return (<> <p>Catname : {props.catname}</p>
    <p>Cat weight : {props.catweight} Kg.</p>
    <div>{props.children}</div>
   
   </>)
 }


function App () {
  return (<> 
    <ChildrenFuncProp catname="Money" catweight="4.5"> <h1>My Cat</h1> </ChildrenFuncProp>
    <NameFuncProp firstname="Mr.Jane" lastname="Srii"/>
    <NameClassProp firstname="Sukar" lastname="Cute_cat" />
    <ClassSendProp style={{ color: 'red'}} catname="Gafeild"/> 
  </>)
}

export default App;
