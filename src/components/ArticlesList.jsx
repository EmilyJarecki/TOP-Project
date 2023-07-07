import React from 'react'
import Article from './Article'


const ArticleList = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  )
}

export default ArticleList