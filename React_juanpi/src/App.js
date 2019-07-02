import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Jrouters from './pages/Jrouters.jsx';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './components/Store/Store.jsx'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Jrouters/>
        </div>
      </Router>

    </Provider>

  );
}

export default App;
