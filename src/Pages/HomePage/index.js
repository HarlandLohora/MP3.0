import React from 'react'
import { Button } from 'antd'
import './styles.css'
const HomePage = () => {
    return (
        <div className='Hp'>
            <div>
                <h1>Buy and sell 🛒</h1>
                <Button type='primary' block>Access with your wallet</Button>
            </div>
            <img src="/ecommerce.svg" alt="ecommerce" />
        </div>
    )
}

export default HomePage