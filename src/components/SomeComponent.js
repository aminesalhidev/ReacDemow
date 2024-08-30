// src/components/SomeComponent.js

import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const SomeComponent = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  if (!authState) {
    return <div>Loading...</div>;
  }

  return <div>Welcome, {authState.userName}!</div>;
};

export default SomeComponent;
