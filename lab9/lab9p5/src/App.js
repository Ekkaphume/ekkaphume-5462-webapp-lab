import React from 'react';
import { users } from './users';

const PopularGitHubUsers = ({ users }) => {
  const popularUsers = users.filter(user => user.followers > 10000);

  return (
    <div>
      <h2>Popular GitHub Repositories</h2>
      <ol>
        {popularUsers.map(user => (
          <li key={user.url}>
            <img
              src={user.imgURL}
              alt={user.alt}
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              {user.alt}
            </a>{' '}
            ({user.followers} followers)
          </li>
        ))}
      </ol>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <PopularGitHubUsers users={users} />
    </div>
  );
};

export default App;