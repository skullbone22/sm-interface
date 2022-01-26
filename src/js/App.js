import { padding } from '@mui/system';
import React from 'react';

import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import TitleBar from './components/TitleBar';
import Main from './Pages/Main';
import Settings from './Pages/Settings';
import Orbat from './Pages/Orbat';
import LoginPage from './Pages/LoginPage';

function IndexPage(props) {
  const [url, setURL] = useState('/index.html');


  var Page;
  var Title = '';
  if (url == '/settings') {
    Page = <Settings />;
    Title = 'Settings';
  } else if (url == '/orbat') {
    Page = <Orbat />;
    Title = 'Orbat';
  } else if (url == '/login') {
    Page = <LoginPage />;
    Title = 'Login';
  } else {
    Page = <Main />;
    Title = 'Home';
  }

  return (
    <>
      <div style={mainTop}>
        <div style={titleBarStyle}>
          <TitleBar />
        </div>
        <div style={headerStyle}>
          <Header setUrl={setURL} pagetitle={Title} />
        </div>
      </div>
      <div style={{ width: '100%', height: '100px' }}></div>
      {Page}
      <br />
      <Footer />
    </>
  );
}

const mainTop = {
  position: 'fixed',
  width: '100%',
  left: 0,
  zIndex: 999,
  top: 0,
};

const headerStyle = {
  backgroundColor: '#082032',
  padding: '10px',
  color: 'white',
  boxShadow: '0 2.5px 2px -2px black',
};

const titleBarStyle = {
  backgroundColor: '#333c47',
  height: '30px',
};

export default IndexPage;
