import { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import abi from "./Contracts/MPContract.json"
import './App.css';
import 'antd/dist/antd.css';

function App() {
  const { Header } = Layout;
  const [wallet, setWallet] = useState();

  const contractAddress = '0xa6009Fc14858375cfD8DE5bab3786C01A407971C';
  const contractABI = abi.abi;

  return (
    <div className="Apsp">
      <Header className="header">

        <div className="MP3"><Link to="">MP3.0</Link></div>
        {
          wallet && <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link to="items">Items</Link></Menu.Item>
            <Menu.Item key="2"><Link to="new-item">Create you item</Link></Menu.Item>
          </Menu>
        }
      </Header>
      <Outlet context={{ setWallet, contractAddress, contractABI }} />
    </div>
  );
}

export default App;
