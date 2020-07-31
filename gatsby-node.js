const slugify = require("slugify")

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === "TakeShapeSource") {
    console.log(node)
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      takeshape {
        docs: getDocList {
          items {
            title
            _id
          }
        }
      }
    }
  `)
  data.takeshape.docs.items.forEach(doc => {
    actions.createPage({
      path: slugify(doc.title.toLowerCase()),
      component: require.resolve(`./src/templates/doc.js`),
      context: {
        id: doc._id,
      },
    })
  })
}
