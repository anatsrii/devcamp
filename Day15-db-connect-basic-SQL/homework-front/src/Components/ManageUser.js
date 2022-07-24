import { useState, useEffect } from "react";
import { Table, Space, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from "moment";
import axios from "../config/axios";

const {confirm} = Modal



function ManageUser() {
  const [data, setData] = useState([]);
  const column = [
    {
      title: 'Firstname', 
      dataIndex: 'firstname',
      key: 'firstname'
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key: 'lastname'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Create At',
      key: 'create_at',
      render: (data)=> (
        moment(data.create_at).format('LLL')
      )
    },
    {
      title: 'Actions',
      key: 'id',
      render: (data)=> (
        <Space size="middle">
          <Button  onClick={ ()=> editUserFn(data.id) } > Edit </Button>
          <Button type="danger" onClick={ ()=> deleteUser(data.id, data.firsname) }> Delete </Button>
        </Space>
      )
    }
  ]
  
  
  const editUserFn = (id)=> {
    console.log(id);
  }
  
  const deleteUser = (id, firstname) => {
    const onOkFn = (id) => {
      console.log(id);
      axios.delete(`/delete-user/:${id}`);
      fetchData();
    }
    confirm({
      title: `Do you want to delete this user?`,
      icon: <ExclamationCircleOutlined />,
  
      onOk() {
        onOkFn(id);
      },
  
      onCancel() {
        console.log('Cancel');
      }
    })
  }
  
  

  const fetchData = async ()=> {
    const getData = await axios.get('/user')
    setData(getData.data);
  }

  useEffect( ()=> {
    fetchData();
  }, []);


  
  return(
   <div>
    <h1 style={{textAlign: "center"}}>Manage Users</h1>
     <Table columns={column} dataSource={data} style={{margin: "5px 20px 50px 20px"}}/>
   </div>

  )
}

export default ManageUser;