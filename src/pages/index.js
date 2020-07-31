import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"

function renderCavy(cavy) {
  return (
    <div key={cavy._id}>
      <h3>{cavy.name}</h3>
      <Image src={cavy.photo.path} w={500} alt={cavy.name} />
    </div>
  )
}

export default function ({ data }) {
  const { cavies } = data.takeshape
  return <Layout>{cavies.items.map(renderCavy)}</Layout>
}

export const query = graphql`
  query {
    takeshape {
      cavies: getCavyList {
        items {
          _id
          name
          photo {
            path
          }
        }
      }
    }
  }
`
