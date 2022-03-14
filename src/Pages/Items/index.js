import React, { useState, useEffect } from 'react'
import { Card, Button, Alert, Modal } from 'antd';
import { useOutletContext, useNavigate } from "react-router-dom";
import { ethers } from 'ethers';
import { WalletOutlined, DollarCircleOutlined } from '@ant-design/icons';


const Items = () => {
    const [items, setItems] = useState([])
    const { contractAddress, contractABI } = useOutletContext()
    const navigate = useNavigate()

    function success() {
        Modal.success({
            content: 'New item buyed',
            onOk() { navigate("/items") }
        });
    }

    const buy = async (index, value) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const MPContract = new ethers.Contract(contractAddress, contractABI, signer)
        const buyItem = await MPContract.buyItem(index)
        if (buyItem) {
            success()
        }
    }

    const getInfo = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const MPContract = new ethers.Contract(contractAddress, contractABI, signer)
        const allItems = await MPContract.allItems()
        setItems(allItems)
    }

    useEffect(async () => {
        getInfo();
    }, [])

    return (
        <div className='container'>
            {
                items.map((item, index) => {
                    const { title, url, info, sold, owner, value } = item
                    return (
                        <Card
                            key={index}
                            hoverable
                            style={{ width: 340, margin: "0px 10px", border: "1px solid green" }}
                            cover={<img alt={title} src={info} />}
                        >
                            <p>{title}</p>
                            <p>{url}</p>
                            <p><WalletOutlined /> {owner}</p>
                            <p><DollarCircleOutlined /> {ethers.utils.formatEther(value)}</p>
                            {
                                !sold && (<Button block onClick={() => buy(index, ethers.utils.formatEther(value))}>Buy</Button>)
                            }
                            {
                                sold && <Alert message="Already sold!" type="warning" showIcon />
                            }

                        </Card>
                    )
                })
            }

        </div>
    )
}

export default Items