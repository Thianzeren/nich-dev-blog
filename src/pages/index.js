// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to Nich's Dev Blog!</p>
    </Layout>

  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>

// Step 3: Export your component
export default IndexPage