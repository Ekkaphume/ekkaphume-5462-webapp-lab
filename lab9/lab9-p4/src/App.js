import React from 'react';
import users from './users';
import GitHubInfo from './GitHubInfo';

function App() {
  return (
    <div className="App">
      <h1>GitHub Users Information</h1>
      <GitHubInfo users={users} />
    </div>
  );
}

export default App;