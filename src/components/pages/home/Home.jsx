import React, {useState} from 'react'
import home from './Home.module.css'
import homeImg  from '../home/assets/userAvatar.jpg'
function Home() {

   // State
    const [githubLink, setGithubLink] = useState('')
    
  //Handle change in form input
  const handleFormChange = (e) => {
    e.preventDefault()
    const inputs = e.target.value
    setGithubLink(inputs)
  }
  // Handle form submit
  const handleLinkSubmit = (e) => {
    e.preventDefault()

    // Fetch data from github api
    async function getData() {
      const url = `https://api.github.com/users/${githubLink}`;
      const response = await fetch(url);
      const results = await response.json();

      try{
        if(results){
                     
        }
      }catch(err){
        console.log(err)
      }
    } 
    getData();

    
  }
  return (
    <div className={home.homeWrapper}>
        <div className={home.homeContent}>
           <img src={homeImg} alt='img' className={home.homeImg} />
           <form className={home.homeForm} onSubmit={handleLinkSubmit}>
              <input type='text' 
              placeholder='Enter Github Username' 
              className={home.homeInput} 
              onChange={handleFormChange} />
              <button className={home.homeBtn}>Analyze</button>
           </form>
        </div>
    </div>
  )
}

export default Home