import './App.css';
import {useState} from 'react';
import { users } from './users';

function App() {
  const [index ,setIndex] = useState(0)
  const [showMore ,setShowMore] = useState(false)

  function handleClick() {
    setIndex(index + 1 )
  }
  function handleClick2() {
    setIndex(index - 1 )
  }

  // eslint-disable-next-line no-unused-vars
  function handleMoreFollower() {
    setShowMore(!showMore);

  }

  let userData = users[index]
  
  return ( 
    <div className="App" w='100%'>
      <h1>Sample Github Repository</h1>
      
      <a href={userData.url}><p style={{fontWeight: 'bold', fontSize:'1.5rem'}}>{userData.alt}</p></a> <br/>
      <img width='140px' src={userData.imgURL} alt={userData.alt}/> <br/>
      <button style={{margin:'10px', backgroundColor :'lightblue'}} onClick={handleMoreFollower} color='lightblue'>Show follower</button>
      <p>{showMore ? userData.followers: null}  </p>
      
      <div style={{justifyContent:'space-between',display: 'flex'}}>
        <button style={{marginTop:'320px', backgroundColor :'orange' }} onClick={handleClick2} disabled={index - 1 < 0 ? true : false}>Previous</button>
        <button style={{marginTop:'320px', backgroundColor :'greenyellow'}} onClick={handleClick} disabled={index < 2 ? false : true}>Next</button>
      </div>
    </div>
  );
}

export default App;
