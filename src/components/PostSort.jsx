import React from 'react'

const PostSort = ({options, defaultValue, filter, setFilter}) => {
  return (
    <div className="sortposts">
      <div className="sortposts__content">
        <p className="sortposts__header">Сортировка постов</p>
        <select className="sortposts__select"
          onChange={e => setFilter({...filter, sort: e.target.value})}
        >
          <option className="sortposts__option" disabled value="">{defaultValue}</option>
          {
            options.map(option =>
              <option className="sortposts__option"
                value={option.value}
                key={option.value}
              >{option.name}</option>
            )
          }
        </select>
      </div>
    </div>
  )
}

export default PostSort
