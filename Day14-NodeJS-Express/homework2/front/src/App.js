import './App.css';
import { Breadcrumb, Card, Col, Layout, Row, } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Meta from 'antd/lib/card/Meta';
const { Content } = Layout;

function App() {
  const [user, setUser] = useState([]);
  
  useEffect( ()=> {
    targetUser();
  }, []);

  const targetUser = async ()=> {
    const userData = await axios.get('/api/user');
    setUser(userData.data.test);
  }


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

      </Breadcrumb>
        {user.map((obj, idx)=> {
          return(
            <Row gutter={{lg: 32,}} style={{alignItems: "center", justifyContent: "center"}}>
              <Col span={16}  >
                <Card key={idx}
                hoverable 
                style={{width: 160, alignItems: "center", justifyContent: "center"}}
                cover={<img alt='avatar' src={`./${obj.avatar}`}/>}
                >
                <Meta description={`${obj.first_name} ${'\u00A0'} ${obj.last_name}`}/>
                <Meta description={obj.email}/>

                </Card>
              </Col>
            </Row>
          )
        })}

    </Content>
  
  </Layout>
  );
}

export default App;
