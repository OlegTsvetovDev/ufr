import React from 'react'
import {useHistory} from 'react-router-dom'

const PostItem = ({post, number, deletePost}) => {
  const router = useHistory()

  return (
    <div className="post">
      <div className="post__content">
        <h2 className="content__header">{post.id}. {post.title}</h2>
        <p className="content__body">{post.body}</p>
      </div>
      <div className="post__btns">
        <button className="btns__btn btn"
          onClick={() => router.push(`/posts/${post.id}`)}
        >Открыть</button>
        <button className="btns__btn btn"
          onClick={() => deletePost(post.id)}
        >Удалить</button>
      </div>
    </div>
  )
}

export default PostItem
