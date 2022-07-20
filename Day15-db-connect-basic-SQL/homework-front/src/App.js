import './App.css';
import {Routes, Route} from 'react-router-dom';
import ManageUser from './Components/ManageUser';
import CreateUser from './Components/CreateUser';


const App = () => {
 
  return (
    <Routes>
      <Route path='/create-user' element={<CreateUser/>} />
      <Route path='/manage-user' element={<ManageUser/>}/>
    </Routes>
  );
};

export default App;