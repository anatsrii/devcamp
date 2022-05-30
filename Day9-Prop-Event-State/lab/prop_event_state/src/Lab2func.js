const Lab2FuncProp = (props) => {
  return (
    <>
    <p>This is : {props.title}</p>
    <p> Tagname: {props.tagname}</p>
    <div>{props.children}</div>
    </>
  )
}

export default Lab2FuncProp;