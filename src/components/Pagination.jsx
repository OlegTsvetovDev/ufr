import React from 'react'

const Pagination = ({page, changePage, limit}) => {

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
          onChange={e => handlePaginationInput(e)}
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
      </div>
    </div>
  )
}

export default Pagination
