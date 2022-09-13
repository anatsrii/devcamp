import Attractions from "./Components/Attractions";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import IdAttraction from "./Components/IdAttraction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Attractions />} /> 
      <Route path="/attraction/:attractionId" element={<IdAttraction/>} />
    </Routes>
  );
}

export default App;
