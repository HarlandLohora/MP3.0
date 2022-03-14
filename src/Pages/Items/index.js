import React, { useState, useEffect } from 'react'
import { Card, Button } from 'antd';
import { useOutletContext } from "react-router-dom";
import { ethers } from 'ethers';
import { WalletOutlined, DollarCircleOutlined } from '@ant-design/icons';


const Items = () => {
    const [items, setItems] = useState([])
    const { contractAddress, contractABI } = useOutletContext()

    const buy = async (index) => {
        console.log("Buy", index)
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
                    console.log(item)
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
                                !sold && (<Button block onClick={() => buy(index)}>Buy</Button>)
                            }

                        </Card>
                    )
                })
            }

        </div>
    )
}

export default Items