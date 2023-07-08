import React from 'react'
import ArticleList from './ArticlesList'


const Newsroom = () => {
  return (
    < >
      <p className='text-center text-hych-subheading-blue text-lg mb-3'>Newsroom</p>
      <p className='text-center text-hych-subheading-blue text-xs mb-7'>The latest news and media coverage of MakeMyTestCount.</p>
      <ArticleList />
    </>
  )
}

export default Newsroom