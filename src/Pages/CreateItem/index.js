import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./styles.css"

const CreateItem = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='container'>
            <div className='newItemSpace'>
                <h2>Create a new item</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="title"
                        rules={[{ required: true, message: 'Please input a title!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Title" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: 'Please input a description!' }]}
                    >
                        <Input.TextArea
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Description"
                        />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        rules={[{ required: true, message: 'Please input a valid price!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Price"
                            type="number"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" block htmlType="submit" className="login-form-button">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default CreateItem