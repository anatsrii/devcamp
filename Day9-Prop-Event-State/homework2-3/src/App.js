import './App.css';
import React, {useState} from 'react';

function App() {
  let mock = [
    { id: 0, imgSrc: "https://i.pinimg.com/564x/54/4e/bc/544ebc765f7d7aa796a2f88072e94352.jpg", createBy: "Jane", likeCount: 10, commentCount: 5 },
    { id: 1, imgSrc: "https://i.pinimg.com/564x/e3/99/a6/e399a6955ed819612ccf03f0354b4879.jpg", createBy: "Donald", likeCount: 10, commentCount: 5 },
    { id: 2, imgSrc: "https://i.pinimg.com/474x/98/e7/21/98e721856ecc222b529e0b933ee91f06.jpg", createBy: "Harry", likeCount: 10, commentCount: 5 },
    { id: 3, imgSrc: "https://i.pinimg.com/474x/51/a3/b4/51a3b46ff297dc1341b12e14712b9744.jpg", createBy: "Kate", likeCount: 10, commentCount: 5 }
  ];



  const [like, setLike] = useState(0);
  const [comment, setComment] = useState("");
  const [countComment, setCountComment] = useState(0);
  const [listComment, setListComment] = useState([]);




 
  const submitComment = (e) => { 
    alert('Comment Submitted');
    setCountComment(countComment + 1);
    setListComment([...listComment, comment]);
    e.preventDefault();
  }



 


  return (
  <>
    <div className="container">
      <div className="card">
      <img src={mock[3].imgSrc} alt=""/>
      <div>
        <p>Create By : {mock[0].createBy}</p>
        <p> <button onClick={()=> setLike(like + 1)}>Like </button> {like}      Comment : {countComment} </p>
        <p> <form onSubmit={(e)=> submitComment(e)}><input type="text" onChange={(e)=> setComment(e.target.value)}/></form> </p>
        <p>{listComment.map((comment)=> <li>{comment}</li>)}</p>
      </div>
    </div>
    </div>
  </>
  )
  } 

export default App;
