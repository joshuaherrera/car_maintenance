import React from 'react';

// Consumer is where the global context is used by the defined provider
// Provider is where we define what to do when a consumer is called
const AuthUserContext = React.createContext(null);

export default AuthUserContext;