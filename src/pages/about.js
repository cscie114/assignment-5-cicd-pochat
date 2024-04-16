import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function about( { data } ) {
  console.log(data);
  return (
    <Layout>
      <div className='flex flex-col h-screen items-center justify-center'>
        <p className='text-2xl'>Course name: { data.site.siteMetadata.course }</p>

        <p>Course number: { data.site.siteMetadata.title }</p>
        
        <p>Description: { data.site.siteMetadata.description }</p>

        <p>Student: { data.site.siteMetadata.student }</p>

        <p className='text-sm text-gray-400'>(Psst... psst! the above data comes from gatsby.config.js)</p>

      </div>
    </Layout>

  )
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      description
      course
      title
      student
    }
  }
}
`