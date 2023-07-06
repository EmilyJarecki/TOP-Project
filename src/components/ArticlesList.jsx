import React from 'react'
import Article from './Article'


const ArticleList = () => {
  return (
    <>
      <p>(Article List)</p>
      <div className="grid grid-cols-2">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  )
}

export default ArticleList