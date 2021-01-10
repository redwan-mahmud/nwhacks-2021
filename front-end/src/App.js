import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // add route later
import './App.css';
import ProfileSetUp from './screens/ProfileSetUp';
import LoginSignUp from './screens/LoginSignUp/index.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LoginSignUp} />
        <Route path="/ProfileSetup" exact component={ProfileSetUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
