import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
          <Link to="/bollywood"><li>Bollywood</li></Link> 
          <Link to="/technology"><li>Technology</li></Link>
          <Link to="/travel"><li>Travel</li></Link>
      </ul>
    </div>
  )
}

export default Home
