import React from 'react'
import { useOutletContext, useNavigate } from "react-router-dom";
import { Button } from 'antd'
import './styles.css'

const HomePage = () => {
    const { setWallet } = useOutletContext()
    const navigate = useNavigate()
    const connectWallet = async () => {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
                const account = accounts[0]
                setWallet(account)
                navigate("/items", { replace: true });
            } else {
                alert("Install a MetaMask wallet to get our token.");
                console.log("No Metamask detected");
            }
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }

    return (
        <div className='Hp'>
            <div>
                <h1>Buy and sell 🛒</h1>
                <Button type='primary' block onClick={connectWallet}>Access with your wallet</Button>
            </div>
            <img src="/ecommerce.svg" alt="ecommerce" />
        </div>
    )
}

export default HomePage