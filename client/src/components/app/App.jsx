/* React, Redux and Router Imports */ 
import React from 'react';

/* Local Dependencies */
import AppHeader from "./AppHeader.jsx";
import AppNav from "./AppNav.jsx";
import AppMain from "./AppMain.jsx";
import AppFooter from "./AppFooter.jsx";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader></AppHeader>
        <AppNav></AppNav>
        <AppMain></AppMain>
        <AppFooter></AppFooter>
      </React.Fragment>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>Edit <code>src/App.js</code> and save to reload.</p>
      //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      //   </header>
      // </div>
    );
  }
}

export default App;
