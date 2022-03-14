import React from 'react'
import { useNavigate, useOutletContext } from "react-router-dom";
import { Form, Input, Button, Modal } from 'antd';
import { ethers, utils } from 'ethers';
import ShortUniqueId from "short-unique-id"
import { LockOutlined, DollarCircleOutlined, InfoCircleOutlined, LinkOutlined } from '@ant-design/icons';
import "./styles.css"

const CreateItem = () => {
    const navigate = useNavigate()
    const { contractAddress, contractABI } = useOutletContext()
    const { Item } = Form

    function success() {
        Modal.success({
            content: 'New item added',
            onOk() { navigate("/items") }
        });
    }

    function info(values) {
        Modal.info({
            title: 'Create a new item',
            content: (
                <div>
                    <p>Are you sure?</p>
                </div>
            ),
            onOk() {
                createItemHandler(values)
            },
        });
    }

    const onFinish = (values) => {
        info(values)
        // success()
    };


    const createItemHandler = async (data) => {
        const uid = new ShortUniqueId({ length: 10 });
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const { price, description, title, url } = data
        const MPContract = new ethers.Contract(contractAddress, contractABI, signer)
        const txn = await MPContract.newItem(uid(), ethers.utils.parseEther(price), title, description, url)
        if (txn) {
            setTimeout(() => {
                success()
            }, 2500)
        }
    }


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
                    <Item
                        name="title"
                        rules={[{ required: true, message: 'Please input a title!' }]}
                    >
                        <Input prefix={<InfoCircleOutlined className="site-form-item-icon" />} placeholder="Title" />
                    </Item>
                    <Item
                        name="description"
                        rules={[{ required: true, message: 'Please input a description!' }]}
                    >
                        <Input.TextArea
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Description"
                        />
                    </Item>

                    <Item
                        name="price"
                        rules={[{ required: true, message: 'Please input a valid price!' }]}
                    >
                        <Input
                            prefix={<DollarCircleOutlined className="site-form-item-icon" />}
                            placeholder="Price"
                            type="number"
                        />
                    </Item>
                    <Item
                        name="url"
                        rules={[{ required: true, message: 'Please input a title!' }]}
                    >
                        <Input prefix={<LinkOutlined className="site-form-item-icon" />} placeholder="Url cover" />
                    </Item>

                    <Item>
                        <Button type="primary" block htmlType="submit" className="login-form-button">
                            Create
                        </Button>
                    </Item>
                </Form>
            </div>
        </div>
    )
}

export default CreateItem