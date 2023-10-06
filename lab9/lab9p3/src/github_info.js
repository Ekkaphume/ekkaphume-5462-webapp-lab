import React from 'react';

const GitHubInfo = (prop) => {
  return (
  
    <div>
        <h1>{prop.userInfo.alt}</h1>
        
        <img width='70px' src={prop.userInfo.imgURL} alt={prop.userInfo.alt} /><br />
        <h2><a href={prop.userInfo.url} target="_blank" rel="noreferrer">GitHub repository</a></h2>
    </div>
  );
};

export default GitHubInfo;