import React from 'react';

const GitHubAvatar = ({ username }) => {
  const avatarUrl = `https://avatars.githubusercontent.com/${username}`;

  return (
    <img
      src={avatarUrl}
      alt="GitHub Avatar"
      style={{ width: '100px', height: '100px', borderRadius: '50%' }}
    />
  );
};

export default GitHubAvatar;