import { Form, Input, InputNumber, Radio, Select, DatePicker, Checkbox, Row, Col } from "antd";

const { Option } = Select;

const FormCreate = () => {
  const selectProvince = (value) => {
    console.log("Select Province", value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const checkInputVal = (e)=> {console.log(`Input =${e.target.value}`)}
  const checkDate = (value)=>{console.log(`Pick date = ${value}`)}
  const checkboxVal = (value)=> {console.log(`Check Box value = ${value}`)}

  return (
    <>
      {/* input text */}
      <Form.Item label="Input Text" rules={[{ required: true, message: "please insert input" }]}>
        <Input placeholder="Input" style={{ placeItems: "center" }} onChange={checkInputVal}/>
      </Form.Item>

        {/* input number */}
      <Form.Item
        label="Input Number"
        rules={[{ required: true, message: "please input number" }]}
      >
        <InputNumber />
      </Form.Item>
        {/* radio Input */}
      <Form.Item label="Input Radio:">
        <Radio.Group value={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </Form.Item>

        {/* input select */}
      <Form.Item label="Select">
        <Select
          rules={[{ required: true, message: "please select Province" }]}
          defaultValue={"Bangkok"}
          showSearch
          placeholder="Select Province"
          optionFilterProp="children"
          onChange={selectProvince}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="Bangkok">Bangkok</Option>
          <Option value="Samutprakan">Samutprakan</Option>
          <Option value="Chaiyaphum">Chaiyaphum</Option>
          <Option value="Khonkan">Khonkan</Option>
          <Option value="Saraburi">Saraburi</Option>
        </Select>
      </Form.Item>

      {/* datepicker */}
      <Form.Item label="Date picked"
      rules={[{required: true, message: "Please Picked up the date"}]}>
          <DatePicker onChange={checkDate}/>
      </Form.Item>

      {/* Check Box */}
      <Form.Item label="Check Box"
      rules={[{required: true, message: "Please Picked up the date"}]}>

<Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={checkboxVal}
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
    </>
  );
};

export default FormCreate;
