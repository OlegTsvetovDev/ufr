import React, {useState} from 'react'
import Modal from './ui/Modal'

const PostForm = ({posts, setPosts,  modalActive, setModalActive}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addPost = e => {
    e.preventDefault()
    setPosts([...posts, {id: Date.now(), title: post.title, body: post.body}])
    setPost({title: '', body: ''})
    setModalActive(false)
  }

  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive}>
      <div className="addpost">
        <form className="addpost__content">
          <h2 className="addpost__header">Добавить новый пост</h2>
          <input type="text" placeholder="Наменование поста"
            className="addpost__input"
            onChange={e => setPost({...post, title: e.target.value})}
            value={post.title}
          />
          <textarea type="text" placeholder="Содержание поста"
            cols="50" rows="10"
            className="addpost__input"
            onChange={e => setPost({...post, body: e.target.value})}
            value={post.body}
          />
          <button className="addpost__btn btn"
            onClick={e => addPost(e)}
          >Добавить</button>
        </form>
      </div>
    </Modal>
  )
}

export default PostForm
