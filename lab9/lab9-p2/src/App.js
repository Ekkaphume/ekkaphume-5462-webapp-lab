import './App.css';
import { GitHubAvatar,GitHubRepoURL } from './github_data';

const userInfo = {
  url: 'https://github.com/Ekkaphume',
  alt: 'Ekkaphume Prasert',
  imgURL: 'https://avatars.githubusercontent.com/u/96043477?v=4'
}

function App() {
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgUrl={userInfo.imgURL} alt={userInfo.alt} size={200}/>
      <GitHubRepoURL url={userInfo.url}/>
    </div>
  )
}

export default App;