import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';


import './App.css';
import 'antd/dist/antd.css';

function App() {
  const { Header } = Layout;
  return (
    <div className="Apsp">
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1"><Link to="items">Items</Link></Menu.Item>
          <Menu.Item key="2"><Link to="new-item">Create you item</Link></Menu.Item>
        </Menu>
      </Header>
      <Outlet />
    </div>
  );
}

export default App;
