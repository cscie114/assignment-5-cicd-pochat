import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      <div>
          { children }
      </div>
      <footer className="text-gray-500 py-4 text-center text-sm">
  <p>All videos are the property of their respective owners.</p>
</footer>

    </div>
  )
}
