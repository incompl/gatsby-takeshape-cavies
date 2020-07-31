import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Link from "../components/link"

export default function ({ children }) {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <h1>
            <a href="/">Guinea Pig Photos</a>
          </h1>
          <div>
            <em>These dogs are very small and don't bark</em>
          </div>
          <div style={{ margin: "1rem 0" }}>
            {data.takeshape.docs.items.map(doc => (
              <Link
                style={{ margin: "0 1em 0 0" }}
                key={doc.title}
                to={doc.title}
              >
                {doc.title}
              </Link>
            ))}
          </div>
          {children}
        </>
      )}
    />
  )
}

const query = graphql`
  query {
    takeshape {
      docs: getDocList {
        items {
          title
        }
      }
    }
  }
`
