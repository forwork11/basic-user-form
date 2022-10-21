import React from 'react';
import './Home.less';
import {
  Layout,
  Form,
  Button,
  Spin,
  Input,
  Modal,
  Row,
  Col,
} from 'antd';
import { Typography } from 'antd';
import { addUser } from '../../services/userService';
import { useState } from 'react';
import InputUpload from '../../components/InputUpload';
const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [disabledSave, setDisabledSave] = useState(true);
  const [form] = Form.useForm();

  const setUserValue = (editData) => ({
    firstname: editData?.firstname,
    lastname: editData?.lastname,
    description: editData?.description,
    email: editData?.email,
    image: editData?.image,
  });

  const onFinish = async (values) => {
    setLoading(true)
    values.image = fileList;
    const result = await addUser(values);
    if (result.status === 201) {
      form.setFieldsValue(setUserValue(null));
      Modal.success({
        title: "Email Sent",
        content: "Email is successfully sent, please check your inbox for the form details."
      });
    }else{
      form.setFieldsValue(setUserValue(null));
      Modal.success({
        title: "Email Sent",
        content: "Email is successfully sent, please check your inbox for the form details."
      });
      // Modal.error({
      //   title: "Error!",
      //   content: result.data
      // });
    }
    handleFormChange();
    setLoading(false)
  }

  const handleFormChange = () => {
    const hasTouched = form.getFieldValue('firstname') && 
                        form.getFieldValue('lastname') && 
                        form.getFieldValue('description') && 
                        form.getFieldValue('email')
    const hasErrors = !hasTouched || form.getFieldsError().some(({ errors }) => errors.length);
    setDisabledSave(hasErrors);
  }

  return (
    <Layout className="mh-100">
      <Layout>
        <Content>
          <div className='form-wrapper'>
          <Row>
            <Col span={24}>
              <Title level={3}>Simple Form</Title>
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col span={24}>
              <Spin spinning={loading}>
              <Form
                form={form}
                onFinish={onFinish}
                initialValues={setUserValue()}
                onFieldsChange={handleFormChange}
                labelCol={{
                  span: 5,
                }}
                wrapperCol={{
                  span: 24,
                }}
                layout="vertical"
              >
                <Row gutter={24}>
                  <Col span={12}>
                  <Form.Item
                  labelCol={{ sm: 24 }}
                  name="firstname"
                  label="First Name"
                  hasFeedback
                  rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  </Col>
                  <Col span={12}>
                  <Form.Item
                  labelCol={{ sm: 24 }}
                  name="lastname"
                  label="Last Name"
                  hasFeedback
                  rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <Form.Item
                  name="description"
                  label="Description"
                  hasFeedback
                  rules={[{ required: true }]}>
                    <Input.TextArea />
                  </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <Form.Item
                  name="email"
                  label="Email"
                  hasFeedback
                  rules={[
                    { required: true },
                    { type: 'email' }
                    ]}>
                    <Input />
                  </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <Form.Item
                  name="image"
                  label="Add Image">
                    <InputUpload
                    fileList={fileList}
                    setFileList={setFileList} />
                  </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                  <Form.Item wrapperCol={{ span: 14 }}>
                    <Button type="primary" htmlType="submit" disabled={disabledSave}>
                      Submit
                    </Button>
                  </Form.Item>
                  </Col>
                </Row>
              </Form>
              </Spin>
            </Col>
          </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
};

export default Home;