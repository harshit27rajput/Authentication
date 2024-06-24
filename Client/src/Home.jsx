import React from 'react'
import { Link } from 'react-router-dom'
import '../src/Home.css'
function Home() {
  return (
    <div className='newpage'>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2>WELCOME TO THE PAGE</h2>
          </div>
          <div className="flip-box-back">
            <h2><Link to='/home'>YOU SUCCESSFULLY LOGGED IN</Link></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
