import React from 'react';
import GitHubAvatar from './GitHubAvatar';
import GitHubRepoURL from './GitHubRepoURL';
import './styles.css';

const App = () => {
  const githubUsername = 'Ekkaphume';

  return (
    <div className="app-container" >
      <h1>My GitHub Repository</h1>
      <div className="center-content">
        <GitHubAvatar username={githubUsername} style={{innerWidth:'100px'}}/>
        <div>
          <p>Click below to open My GitHub repository:</p>
          <GitHubRepoURL username={githubUsername} />
        </div>
      </div>
    </div>
  );
};

export default App;