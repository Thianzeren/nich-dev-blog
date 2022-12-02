// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle= "About Me">
      <p>Hi there! I'm Nicholas a junior developer :D</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage