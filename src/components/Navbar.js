import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {

  const data = useStaticQuery(graphql`
  query Site {
    site {
      siteMetadata {
        description
        course
        title
      }
    }
  }
  `)
  console.log(data);

  return (
    <nav className="bg-gray-800 py-2">
      <div className="container mx-auto flex items-center space-x-5">
        <h2 className='text-base text-gray-400 text-left'>{ data.site.siteMetadata.course }</h2>
        <Link to='/' className="text-white font-semibold text-lg p-5">Home</Link>

        <Link to='/about' className="text-white font-semibold text-lg">About</Link>
        
      </div>
    </nav>
  )
}
