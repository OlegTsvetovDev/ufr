import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import PostService from '../components/api/PostService'
import {useFetching} from '../components/hooks/useFetching'
import Loader from '../components/ui/Loader'

const PostIdPage = () => {
  const history = useHistory()
  const params = useParams()
  const id = params.id
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPost(id)
    setPost(response)
  })
  const [comments, setComments] = useState([])
  const [fetchCommentsById, areCommentsLoading, commentsError] = useFetching(async () => {
    const response  = await PostService.getComments(id)
    setComments(response)
  })

  // eslint-disable-next-line
  useEffect(() => fetchPostById(id), [])
  // eslint-disable-next-line
  useEffect(() => fetchCommentsById(id), [post])

  return (
    <div className="app__content">
      {
        isLoading
          ? <Loader />
          : error
              ? <h1>Не удалось загрузить пост: {error}</h1>
              : <div className="post">
                  <div className="post__content">
                  <div className="post__item" key={post.id}>
                    <h1 className="post__header">Post ID page: {params.id}</h1>
                    <p className="post__paragraph">ID поста: {post.id}</p>
                    <p className="post__paragraph">User ID: {post.userId}</p>
                    <p className="post__paragraph">Заголовок поста: {post.title}</p>
                    <p className="post__paragraph">Контент поста: {post.body}</p>
                  </div>
                  </div>
                </div>
      }
      {
        areCommentsLoading
          ? <Loader />
          : commentsError
            ? <h3>Не удалось загрузить комментарии: {error}</h3>
            : <div className="comments">
                <div className="comments__content">
                  {
                    comments.map(comment =>
                      <div className="comments__item" key={comment.id}>
                        <h3 className="comments__item">ID комментария: {comment.id}</h3>
                        <p className="comments__paragraph">Email комментария: {comment.email}</p>
                        <p className="comments__paragraph">Name комментария: {comment.name}</p>
                        <p className="comments__paragraph">Контент комментария: {comment.body}</p>
                      </div>
                    )
                  }
                </div>
              </div>
      }
      <button className="btn"
        onClick={() => history.goBack()}
      >Вернуться назад</button>
    </div>
  )
}

export default PostIdPage
