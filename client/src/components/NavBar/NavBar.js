import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const items = ['HOME'].map((key) => ({
  key,
  label: (
    //   link to 로 바꿔보기 
    // <Link to="/movie"> {key} </Link>
    <a href={key === 'HOME' ? '/movie' : `/${key}`}>
      {key}
    </a>
  ),
}));


const NavBar = () => {

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['HOME']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
    </Layout>
  );
};

export default NavBar;