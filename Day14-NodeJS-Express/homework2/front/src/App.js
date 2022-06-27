import './App.css';
import { Breadcrumb, Layout, } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
const { Content } = Layout;

function App() {
  const [user, setUser] = useState([]);
  
  useEffect( ()=> {
    targetUser();
  }, [])
  const targetUser = async ()=> {
    const userData = await axios.get('/api/user');
    setUser(userData.data.test);
  }
const mapUser = user.map((obj)=> {
  return <div>{obj.email}</div>
})

  return (
    <Layout className="layout">
 
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
        >
          {mapUser}
      </Breadcrumb>

    </Content>
  
  </Layout>
  );
}

export default App;
