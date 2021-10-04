import React, {useState, useEffect} from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostSort from '../components/PostSort'
import PostFilter from '../components/PostFilter'
import Pagination from '../components/Pagination'
import PostService from '../components/api/PostService'
import Loader from '../components/ui/Loader'
import Modal from '../components/ui/Modal'
import {usePosts} from '../components/hooks/usePosts'
import {useFetching} from '../components/hooks/useFetching'
import {getPagesCount} from '../utils/pages'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modalActive, setModalActive] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPosts, arePostsLoading, fetchError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    const totalCount = response.headers['x-total-count']
    setPosts(response.data)
    setTotalPages(getPagesCount(totalCount, limit))
  })
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


  useEffect(() => {
    fetchPosts()
    // остался баг с итоговым пересчетом количества страниц в пагинации
  }, [page, limit])

  const changePage = page => setPage(page)

  return (
    <div className="app__content">
      <div className="controls">
        <div className="controls__content">
          <Pagination
            limit={limit} setLimit={setLimit}
            page={page} changePage={changePage}
          />
          <PostFilter
            filter={filter} setFilter={setFilter}
          />
          <PostSort defaultValue="По умолчанию"
            options={[
              {value: 'title', name: 'По заголовку'},
              {value: 'body', name: 'По содержимому'},
            ]}
            filter={filter} setFilter={setFilter}
          />
          <button className="postadd__btn btn"
            onClick={() => setModalActive(true)}
          >Добавить пост</button>
        </div>
      </div>
      {
        fetchError
          && <Modal modalActive={true} setModalActive={setModalActive}><p>Произошла ошибка:<br />${fetchError}</p></Modal>
      }
      {
        arePostsLoading
          ? <Loader />
          : <PostList
            posts={sortedAndSearchedPosts} setPosts={setPosts}
            title="Список постов"
          />
      }
      <PostForm
        posts={posts} setPosts={setPosts}
        modalActive={modalActive} setModalActive={setModalActive}
      />
    </div>
  )
}

export default Posts
