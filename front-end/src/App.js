import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // add route later
import './App.css';
import ProfileSetUp from './screens/ProfileSetUp/index.js';
import LoginSignUp from './screens/LoginSignUp/index.js';
import { Provider } from './context';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <div>
          <Route path="/" exact component={LoginSignUp} />
          <ProtectedRoute
            routeProps={{
              path: '/profilesetup',
              exact: true,
            }}
            component={ProfileSetUp}
          />

          <LoadingOverlay />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
