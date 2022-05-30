import "./App.css";


const Card1 = (props) => {
  return (
    <>
    <div className="card">
      <img src={props.imgSrc} alt=""/>
      <div>
        <p>Create By : {props.createBy}</p>
        <p>Like : {props.likeCount} Comment : {props.commentCount} </p>
      </div>
    </div>
    </>
  )
}

const Card2 = (props) => {
  return (
    <>
    <div className="card">
      <img src={props.imgSrc} alt=""/>
      <div>
        <p>Create By : {props.createBy}</p>
        <p>Like : {props.likeCount} Comment : {props.commentCount} </p>
      </div>
    </div>
    </>
  )
}

const Card3 = (props) => {
  return (
    <>
    <div className="card">
      <img src={props.imgSrc} alt=""/>
      <div>
        <p>Create By : {props.createBy}</p>
        <p>Like : {props.likeCount} Comment : {props.commentCount} </p>
      </div>
    </div>
    </>
  )
}
const Card4 = (props) => {
  return (
    <>
    <div className="card">
      <img src={props.imgSrc} alt=""/>
      <div>
        <p>Create By : {props.createBy}</p>
        <p>Like : {props.likeCount} Comment : {props.commentCount} </p>
      </div>
    </div>
    </>
  )
}

function App() {
  let mock = [
    { id: 0, imgSrc: "https://i.pinimg.com/564x/54/4e/bc/544ebc765f7d7aa796a2f88072e94352.jpg", createBy: "Arnold", likeCount: 10, commentCount: 5 },
    { id: 1, imgSrc: "https://i.pinimg.com/564x/e3/99/a6/e399a6955ed819612ccf03f0354b4879.jpg", createBy: "Donald", likeCount: 10, commentCount: 5 },
    { id: 2, imgSrc: "https://i.pinimg.com/474x/98/e7/21/98e721856ecc222b529e0b933ee91f06.jpg", createBy: "Harry", likeCount: 10, commentCount: 5 },
    { id: 3, imgSrc: "https://i.pinimg.com/474x/51/a3/b4/51a3b46ff297dc1341b12e14712b9744.jpg", createBy: "Kate", likeCount: 10, commentCount: 5 }
  ];
  return (
  <div className="container">
    <Card1 id={mock[0].id} imgSrc={mock[0].imgSrc} createBy={mock[0].createBy}
    likeCount={mock[0].likeCount} commentCount={mock[0].commentCount}/>

    <Card2 id={mock[1].id} imgSrc={mock[1].imgSrc} createBy={mock[1].createBy}
    likeCount={mock[1].likeCount} commentCount={mock[1].commentCount}/>

    <Card3 id={mock[2].id} imgSrc={mock[2].imgSrc} createBy={mock[2].createBy}
    likeCount={mock[2].likeCount} commentCount={mock[2].commentCount}/>

    <Card4 id={mock[3].id} imgSrc={mock[3].imgSrc} createBy={mock[3].createBy}
    likeCount={mock[3].likeCount} commentCount={mock[3].commentCount}/>

  </div>
  )
}

export default App;
