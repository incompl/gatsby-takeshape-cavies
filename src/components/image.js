import React from "react"

export default function Image({ src, h, w, ...rest }) {
  let fullSrc = `//takeshape-prod.imgix.net/${src}?fit=clamp`
  if (h) {
    fullSrc += `&h=${h}`
  }
  if (w) {
    fullSrc += `&w=${w}`
  }
  return <img {...rest} src={fullSrc} />
}
