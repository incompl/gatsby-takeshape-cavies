import React from "react"
import slugify from "slugify"

export default function ({ to, children, ...rest }) {
  return (
    <a {...rest} href={slugify(to.toLowerCase())}>
      {children}
    </a>
  )
}
