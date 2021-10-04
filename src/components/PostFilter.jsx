import React from 'react'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className="filterposts">
      <div className="filterposts__content">
        <p className="filterposts__header">Фильтр постов</p>
        <input type="text" className="filterposts__input"
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
        />
      </div>
    </div>
  )
}

export default PostFilter
