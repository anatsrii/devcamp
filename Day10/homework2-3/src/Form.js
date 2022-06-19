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
  Modal,
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
  const [skill, setSkill] = useState();
  const [isActive, setActive] = useState(true);
  const [otherShow, setOtherShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');
  const [other, setOther] = useState('');
  const [agree, setAgree] = useState('');
  const [skillVal, setSkillVal] = useState('')
  const [dateTime, setDate] = useState('');

  const submitData = () => {
    if (formFailed === false) {
      setShowModal(false);
    } else {
      setShowModal(true);
      
    }
  };

  const formFailed = () => {
    setShowModal(false);
    return false;
  };

  const modalOk = () => {
    //Send values to next process
    setShowModal(false);
  };

  const modalCancle = () => {
    setShowModal(false);
  };

  const toggle = () => {
    setActive(!isActive);
    console.log(`after setActive `, isActive);
    if (isActive) {
      setSkill(
        <Form.Item name="skills" label="Skill" initialValue={"None"}>
          <Select>
            <Option value="React">React</Option>
            <Option value="Flutter">Flutter</Option>
            <Option value="Python">Python</Option>
          </Select>
        </Form.Item>
      );
    } else {
      setSkill("");
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log(values.date)
    setFirstName(values.Fname);
    setAge(values.age);
    setGender(values.gender);
    setProvince(values.province);
    setOther(values.other);
    setSkillVal(values.skills);
    setDate(values.date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    setAgree(values.checkbox);
  }

  const statusFn = (value) => {
    if (value === "ต่างประเทศ") {
      setOtherShow(false);
      return false;
    } else {
      setOtherShow(true);
      return true;
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      onFinishFailed={formFailed}
      scrollToFirstError
    >
      {/* input text */}
      <Form.Item
        name="Fname"
        label="First Name"
        rules={[{ required: true, message: "please input your First Name" }]}
      >
        <Input
          placeholder="First Name"
          style={{ placeItems: "center" }}
          max={50}
        />
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
        <Radio.Group>
          <Radio value={"Male"}>Male</Radio>
          <Radio value={"Female"}>Female</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Province input select */}
      <Form.Item name="province" label="Province" initialValue={"Chaiyaphum"}>
        <Select
          onChange={statusFn}
          rules={[{ required: true, message: "please select your Province" }]}
          placeholder="Select Province"
        >
          <Option value="Bangkok">Bangkok</Option>
          <Option value="Samutprakan">Samutprakan</Option>
          <Option value="Chaiyaphum">Chaiyaphum</Option>
          <Option value="Khonkan">Khonkan</Option>
          <Option value="Saraburi">Saraburi</Option>
          <Option value="ต่างประเทศ">ต่างประเทศ</Option>
        </Select>
      </Form.Item>

      {/* Other input select */}
      <Form.Item name="other" label="Other" initialValue={"None"}>
        <Select disabled={otherShow}>
          <Option value="Chaina">Chaina</Option>
          <Option value="Japan">Japan</Option>
          <Option value="English">English</Option>
        </Select>
      </Form.Item>

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
              <Checkbox value="yes">Agree</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="no">Disagree</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      {/* button */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={submitData}>
          Submit
        </Button>
      </Form.Item>
      <Modal
        title="Form Data"
        visible={showModal}
        onOk={modalOk}
        onCancel={modalCancle}
        centered
      >
       <p>First Name {firstName}</p> 
       <p>Age {age}</p>
       <p>Gender {gender}</p>
       <p>province {province}</p>
       <p>Other {other}</p>
       <p>Skill {skillVal}</p>
       <p>Date {dateTime}</p>
       <p>Agreement {agree}</p>
      </Modal>
    </Form>
  );
};

export default FormCreate;
