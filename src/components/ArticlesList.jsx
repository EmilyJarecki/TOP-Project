import React from 'react'
import NewsArticle from './NewsArticle'


const ArticleList = () => {
  return (
    <>
      <h1>Article List</h1>
      <div className="grid grid-cols-2">
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </div>
    </>
  )
}

export default ArticleList