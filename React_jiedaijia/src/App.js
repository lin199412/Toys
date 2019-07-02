import React from 'react';
// import logo from './logo.svg';
import './App.css';
import JDrouters from './pages/JDrouters.jsx';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store/Store.jsx'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <JDrouters/>
      </div>
      </Router>

      
    </Provider>

  );
}

export default App;
