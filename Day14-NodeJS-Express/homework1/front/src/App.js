
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title"
  },
  {
    title: "Content",
    dataIndex: "Content",
    key: "Content"
  },
  {
    title: "Create_Date",
    dataIndex: "Create_Date",
    key: "Create_Date"
  }
]
function App() {

  const [data, setData] = useState([]);
  // useEffect(()=> {
  //   axios.get('/api/articles').then((result)=> {
  //     console.log('result data = ', result.data);
  //     setData(result.data);
  //   })
  // })
  
  const fetchData = async () => {
    const getData = await axios.get('/api/articles');
    console.log(getData)
    setData(getData.data);
  }

  useEffect(()=> {
    fetchData();
  }, [])

  return(
    <Table dataSource={data} columns={columns} pagination={false} />
  )
}

export default App;
