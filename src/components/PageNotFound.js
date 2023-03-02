import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <main>
      <h1> 404 Page Not Found !</h1>
        <Link to='/'>Return to main</Link>
    </main>
  )
}

export default PageNotFound
