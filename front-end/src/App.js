import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // add route later
import './App.css';
import LogInSignUp from './screens/LogInSignUp';
import ProfileSetUp from './screens/ProfileSetUp'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LogInSignUp} />
        <Route path="/ProfileSetup" exact component = {ProfileSetUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
