import { Layout, Menu, Breadcrumb, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import {Link, Route} from 'react-router-dom';
import Home from './Home';
const { Header, Content, Footer } = Layout;

function Display() {
  let menus = [
    {id: 1, name: 'Home', path: '/', ele: <Home/>},
    {id: 2, name: 'Column-List', path: '/column-list'},

  ]
  return(
    <>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={menus.map((i)=> {
          return {key: i.name, label: i.name,}
        })}
      />
    </Header>
    <Content >

      <div className="site-layout-content">
      <Row>
      <Col span={4} > Col 1</Col>
      <Col span={4} > Col 2</Col>
      <Col span={4} > Col 3</Col>
      <Col span={4} > Col 4</Col>
      <Col span={4} > Col 5</Col>
      <Col span={4} > Col 6</Col>
      </Row>
      </div>
    </Content>

  </Layout>

    </>
  );
}

export default Display;