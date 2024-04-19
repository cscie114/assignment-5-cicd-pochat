import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function IndexPage({ data }) {
  const [message, setMessage] = useState('');

  const helloClick = async () => {
    try {
      const response = await fetch('/.netlify/functions/hello'); 
      console.log("response:", response);
      const responseData = await response.json();
      console.log("responseData:", responseData);
      setMessage(responseData.hello); // Corrected this line
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };
  
  return (
    <Layout>
      <div className=''>
        <h1 className="text-center text-3xl font-bold mb-8 mt-8">Fetching 6 videos with the Youtube API:</h1>
        <button onClick={helloClick} className='flex m-auto p-5 bg-slate-200'>Click to run the serverless function</button>
        <p className='flex font-bold text-red-500 items-center justify-center p-5'>{ message }</p>

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
  );
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
`;
