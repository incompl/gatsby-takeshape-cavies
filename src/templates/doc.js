import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ({ data }) {
  const { title, contentHtml } = data.takeshape.doc
  return (
    <Layout>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    takeshape {
      doc: getDoc(_id: $id) {
        title
        contentHtml
      }
    }
  }
`
