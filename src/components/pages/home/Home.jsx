import React from 'react'
import home from './Home.module.css'
import homeImg  from '../home/assets/userAvatar.jpg'
function Home() {

  //
  return (
    <div className={home.homeWrapper}>
        <div className={home.homeContent}>
           <img src={homeImg} alt='img' className={home.homeImg} />
           <form className={home.homeForm}>
              <input type='text' placeholder='Enter Github Link' className={home.homeInput} />
              <button className={home.homeBtn}>Analyze</button>
           </form>
        </div>
    </div>
  )
}

export default Home