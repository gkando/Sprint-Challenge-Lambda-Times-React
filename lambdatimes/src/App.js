import React, { Component, useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthenticate from './components/Authentication/withAuthenticate';


const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('user_name') || '');
  const ComponentFromWithAuthenticate = withAuthenticate(Content)(TopBar)(Header)

  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
      {/* <Content /> */}
    </div>
  );
}

export default App;
