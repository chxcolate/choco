// WARNING: 404.js is required to be a .js file.
import React from 'react'
import '../styles/404.scss'
import SEO from '../components/seo'

export default function error404() {
  return (
    <div className="container404">
      <SEO title="404" description="404 Page." noindex={true} />
      <h1>404 Not Found</h1>
    </div>
  )
}
