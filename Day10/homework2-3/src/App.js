import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import FormCreate from './Form';

const { Header, Content, Footer } = Layout;

function App() {
  return (
  <>
   <Layout className="layout"  >
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        items={new Array(1).fill(null).map((_, index) => {

          return {

            label: "Home",
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '50px',
        backgroundColor: "white",

      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
      </Breadcrumb>
        <FormCreate />
        
    </Content>
  
  </Layout>
  </>
  );
}

export default App;
