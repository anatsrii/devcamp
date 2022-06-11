import { Form, Input, InputNumber,Radio } from "antd";

const FormCreate = () => {
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Field Name", dataIndex: "fieldName", key: "fieldName" },
    { title: "Validation ", dataIndex: "validation", key: "validation" },
    { title: "Province", dataIndex: "province", key: "province" },
    { title: "Skills", dataIndex: "skills", key: "skills" },
    { title: "Other", dataIndex: "other", key: "other" },
  ];

  const data = [

  ]
  return (
    <>
    <Form.Item label="Input Text" >
    <Input placeholder="Input" style={{placeItems: "center"}} />
    </Form.Item>

    <Form.Item label="Input Number">
      <InputNumber />
    </Form.Item>

    <Form.Item label="Input Radio:">
    <Radio.Group  value={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
    </Form.Item>

    <Form.Item></Form.Item>
    <Form.Item></Form.Item>
    <Form.Item></Form.Item>
    </>
  );
};

export default FormCreate;
