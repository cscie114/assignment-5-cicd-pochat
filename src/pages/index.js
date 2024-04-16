import React from 'react'
import { graphql } from 'gatsby'

export default function IndexPage({ data }) {
  return (
    <div className='h-screen flex flex-col text-2xl items-center justify-center'>
      <p>CI/CD</p>
      <p className='text-red-500'>Mario test Lint</p>
      <p className='text-blue-500'>Added Jest</p>
      <p className='text-green-500'>To netlify.yml</p>
      <p className='text-purple-500'>Added Secrets</p>

      <h1>Fetching videos from Youtube API:</h1>

      {/* Render the fetched video titles */}
      <ul>
        {data.allYoutubeVideo.nodes.map(node => (
          <li key={node.title}>{node.title}</li>
        ))}
      </ul>
    </div>
  )
}

// Query to fetch YouTube video titles
export const query = graphql`
  query {
    allYoutubeVideo {
      nodes {
        title
      }
    }
  }
`
