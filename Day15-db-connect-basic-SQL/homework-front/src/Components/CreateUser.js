import { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import axios from '../config/axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
function CreateUser() {
  const [firstnameField, setFirstname] = useState('');
  const [lastnameField, setLastname] = useState('');
  const [ageField, setAge] = useState('');

  const handleFirstname = (e) => {
    setFirstname(e.target.value)
  }

  const handleLastname = (e) => {
    setLastname(e.target.value);
  }

  const handleAge = (e) => {
    setAge(e.target.value);
  }
  
  const onFinish =  (values) => {
    console.log("onfinish values", values);
    axios.post('/create-user', {firstname: firstnameField, lastname: lastnameField, age: ageField})
  };
  
  const submit =  () => {
    console.log("Submit")
  }

  return(
    <div style={{paddingTop: "25px", width: "50%"}}>
      
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={'firstname'}
        label="Name"
        onChange={handleFirstname}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'lastname'}
        label="Lastname"
        onChange={handleLastname}
        rules={[
          {
            required: true
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'age'}
        label="Age"
        onChange={handleAge}
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={()=>submit()}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  
    </div>
  )
}

export default CreateUser;