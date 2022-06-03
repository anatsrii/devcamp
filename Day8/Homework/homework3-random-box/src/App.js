import './App.css';

function App() {
  let bgColor = ['red', 'blue', 'green', 'purple', 'pink' ]
  let index = Math.floor(Math.random() * bgColor.length);
  console.log(index)
  return (
    <div className="App" >
    <div className="Box" style={{backgroundColor: `'${bgColor[index]}'`}}>
      <p style={{frontSize: 20}}>Random Box</p>
    </div>

    </div>
  );
}

export default App;
