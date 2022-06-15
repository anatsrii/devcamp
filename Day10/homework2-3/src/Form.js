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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
      scrollToFirstError
    >
      {/* input text */}
      <Form.Item
        name="input-text"
        label="Input Text"
        rules={[{ required: true, message: "please insert input" }]}
      >
        <Input placeholder="Input" style={{ placeItems: "center" }} />
      </Form.Item>

      {/* input number */}
      <Form.Item
        name="input-number"
        label="Input Number"
        rules={[{ required: true, message: "please input number" }]}
        initialValue={10}
      >
        <InputNumber min={10} max={100} />
      </Form.Item>
      {/* radio Input */}
      <Form.Item
        name="input-radio"
        label="Input Radio:"
        rules={[{ required: true, message: "please select radio" }]}
      >
        <Radio.Group value={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </Form.Item>

      {/* input select */}
      <Form.Item name="input-select" label="Select" initialValue={"Chaiyaphum"}>
        <Select
          rules={[{ required: true, message: "please select Province" }]}
          placeholder="Select Province"
        >
          <Option value="Bangkok">Bangkok</Option>
          <Option value="Samutprakan">Samutprakan</Option>
          <Option value="Chaiyaphum">Chaiyaphum</Option>
          <Option value="Khonkan">Khonkan</Option>
          <Option value="Saraburi">Saraburi</Option>
        </Select>
      </Form.Item>

      {/* datepicker */}
      <Form.Item
        name="date-picker"
        label="Date picked"
        rules={[{ required: true, message: "Please Picked up the date" }]}
      >
        <DatePicker />
      </Form.Item>

      {/* Check Box */}
      <Form.Item
        name="checkbox"
        label="Check Box"
        rules={[{ required: true, message: "Please Picked up the date" }]}
      >
        <Checkbox.Group
          style={{
            width: "100%",
          }}
        >
          <Row>
            <Col span={8}>
              <Checkbox value="A">A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B">B</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C">C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D">D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E">E</Checkbox>
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
