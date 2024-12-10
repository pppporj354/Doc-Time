import React from 'react'
import { Link } from 'react-router-dom'

const LoadingAnimation = () => {
  return (
    <div>
      
      <Link to="/">
      <button className="bg-primary text-black font-semibold h-10 w-56 rounded-md border border-yellow-400 shadow-text-gold">
          Get Started
        </button>
      </Link>
      
    </div>
  )
}

export default LoadingAnimation
