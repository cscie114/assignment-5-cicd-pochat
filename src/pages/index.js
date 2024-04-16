import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default function IndexPage({ data }) {
  return (
    <Layout>
    <div className=''>
      <h1 className="text-center text-3xl font-bold mb-8 mt-8">Fetching videos with the Youtube API:</h1>

      {/* Render the fetched video titles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.allYoutubeVideo.nodes.map(node => (
          <div key={node.title} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">{node.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${node.videoId}`}
              title={node.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}

// Query to fetch YouTube video titles
export const query = graphql`
  query {
    allYoutubeVideo {
      nodes {
        title
        videoId
        videoThumbnail
      }
    }
  }
`
