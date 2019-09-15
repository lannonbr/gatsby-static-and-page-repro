import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Page Query</h2>
    <pre>{JSON.stringify(data, null, 4)}</pre>
    <h2>Static Query</h2>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={staticData => <pre>{JSON.stringify(staticData, null, 4)}</pre>}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
        }
      }
    }
  }
`
