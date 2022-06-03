import './App.css';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div>Logo</div>
        <div>Create Pikka</div>
        <div>Sign up</div>
        <div>Sign in</div>
        <div>Sign out</div>
      </div>
      <div className="Card">
      <Card/>
      </div>
    </div>
  );
}

export default App;
