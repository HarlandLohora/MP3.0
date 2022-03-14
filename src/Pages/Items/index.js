import React from 'react'
import { Card, Button } from 'antd';
import { WalletOutlined, DollarCircleOutlined } from '@ant-design/icons';


const Items = () => {

    const buy = async () => {
        console.log("BUy")
    }

    return (
        <div className='container'>
            <Card
                hoverable
                style={{ width: 240, margin: "0px 10px" }}
                cover={<img alt="example" src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />}
            >
                <p>Keyboard</p>
                <p>Amazing product!</p>
                <p><WalletOutlined /> 0x89976</p>
                <p><DollarCircleOutlined /> 0.5</p>
                <Button block>Buy</Button>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />}
            >
                <p>Keyboard</p>
                <p>Amazing product!</p>
                <p><WalletOutlined /> 0x89976</p>
                <p><DollarCircleOutlined /> 0.5</p>
                <Button block onClick={buy}>Buy</Button>
            </Card>
        </div>
    )
}

export default Items