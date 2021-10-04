import React from 'react'

const Pagination = ({page, changePage, limit, setLimit}) => {

  const handlePaginationInput = e => {
    let value = +e.target.value
    if (value > limit) value = limit
    if (value < 1) value = 1
    changePage(value)
  }

  return (
    <div className="pagination">
      <div className="pagination__content">
        <p className="pagination__header">Фильтр страниц</p>
        <input type="text" className="pagination__input"
          tooltip="1"
          value={page}
          onChange={handlePaginationInput}
        />
        {
          page > 1 &&
            <>
              <button className="pagination__button"
                onClick={() => changePage(page - 1)}
              >&lt;</button>
              <button className="pagination__button"
                onClick={() => changePage(page - 1)}
              >{page - 1}</button>
            </>
        }
        <button className="pagination__button active">{page}</button>
        {
          page < limit &&
            <>
              <button className="pagination__button"
                onClick={() => changePage(page + 1)}
              >{page + 1}</button>
              <button className="pagination__button"
                onClick={() => changePage(page + 1)}
              >&gt;</button>
            </>
        }
        <select className="pagination__select"
          value={limit}
          onChange={e => setLimit(e.target.value)}
        >
          <option value="5" className="pagination__option">5</option>
          <option value="10" className="pagination__option">10</option>
          <option value="25" className="pagination__option">25</option>
          <option value="-1" className="pagination__option">Все</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination
