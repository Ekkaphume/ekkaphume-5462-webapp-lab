import React from 'react';

const GitHubInfo = ({ users }) => {
  return (
    <ol>
      {users.map((user, index) => (
        <li key={index}>
          <a href={user.url} target="_blank" rel="noopener noreferrer">
            <img width="70px" height="70px" src={user.imgURL} alt={user.alt} />
            {user.followers && user.followers > 10000 && (
              <span>Followers: {user.followers}</span>
            )}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default GitHubInfo;
