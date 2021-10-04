import React from 'react'
import PostItem from './PostItem'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const PostList = ({posts, title, setPosts}) => {

  if (!posts.length) {
    return <h1 className="postsnotfound">Посты не найдены</h1>
  }

  const deletePost = id => {
    setPosts([...posts].filter(post => id !== post.id ))
  }

  return (
    <div className="postlist">
      <div className="postlist__content">
        <h1 className="postlist__header">{title}</h1>
        <TransitionGroup>
          {
            posts.map((post, index) => (
              <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post"
              >
                <PostItem
                  number={index + 1} post={post} deletePost={deletePost}
                />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    </div>
  )
}

export default PostList
