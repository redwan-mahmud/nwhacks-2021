import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // add route later
import './App.css';
import LogInSignUp from './screens/LogInSignUp';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LogInSignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
