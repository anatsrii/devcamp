import {
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Button,
} from "antd";

import { useState } from "react";


const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const FormCreate = () => {
  const [form] = Form.useForm();
  
  const [otherVal, setOther] = useState();
  const [skill, setSkill] = useState();
  const [isActive, setActive] = useState(true);

  const toggle = ()=> {
    console.log(isActive)
    setActive(!isActive)
    console.log(`after setActive `, isActive)
    if (isActive) {
      setSkill(
        <Form.Item name="skill" label="Skill" >
        <Select >
          <Option value="React">React</Option>
          <Option value="Flutter">Flutter</Option>
          <Option value="Python">Python</Option>
        </Select>
      </Form.Item>
      )
    } else {
      setSkill('')
    }
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };


  const statusFn = (value) => {
    if (value === "other") {
      setOther(
      <Form.Item name="other" label="Other" >
      <Select >
        <Option value="Chaina">Chaina</Option>
        <Option value="Japan">Japan</Option>
        <Option value="English">English</Option>
      </Select>
    </Form.Item>)
    }
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      scrollToFirstError
    >
      {/* input text */}
      <Form.Item
        name="first-name"
        label="First Name"
        rules={[{ required: true, message: "please input your First Name" }]}
      >
        <Input placeholder="First Name" style={{ placeItems: "center" }} max={50} />
      </Form.Item>

      {/* Age input Number */}
      <Form.Item
        name="age"
        label="Age"
        rules={[{ required: true, message: "please input your Age" }]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>
      {/* Gender radio Input */}
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: "please select your Gender" }]}
      >
        <Radio.Group >
          <Radio value={"Male"}>Male</Radio>
          <Radio value={"Female"}>Female</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Province input select */}
      <Form.Item name="province" label="Province" initialValue={"Chaiyaphum"}>
        <Select
          onSelect={statusFn}
          rules={[{ required: true, message: "please select your Province" }]}
          placeholder="Select Province"
        >
          <Option value="Bangkok">Bangkok</Option>
          <Option value="Samutprakan">Samutprakan</Option>
          <Option value="Chaiyaphum">Chaiyaphum</Option>
          <Option value="Khonkan">Khonkan</Option>
          <Option value="Saraburi">Saraburi</Option>
          <Option value="other" >ต่างประเทศ</Option>
        </Select>
      </Form.Item>

      {/* Other input select */}
      {/* {otherVal} */}

      {/* Skill */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={toggle}>
          Skill
        </Button>
        </Form.Item>
          {skill}


      {/* Date datepicker https://momentjs.com/*/}
      <Form.Item
        name="date"
        label="Date picked"
        rules={[{ required: true, message: "Please Picked up the date" }]}
      >
        <DatePicker />
      </Form.Item>

      {/* Check Box */}
      <Form.Item
        name="checkbox"
        label="Check Box"
        rules={[{ required: true, message: "Agree or Disagree" }]}
      >
        <Checkbox.Group
          style={{
            width: "100%",
          }}
        >
          <Row>
            <Col span={8}>
              <Checkbox value="agree">Agree</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="disagree">Disagree</Checkbox>
            </Col>
          
          </Row>
        </Checkbox.Group>
      </Form.Item>

      {/* button */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormCreate;
