import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'

const Pagination = ({pageNumber, setPageNumber, pageCount}) => {
    const pageChange = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={''}
            pageCount={pageCount}
            onPageChange={pageChange}
            containerClassName={'paginationButtons'}
            pageRangeDisplayed={(pageNumber !== 1 && pageNumber !== 2) ? 5 : 4}
            marginPagesDisplayed={0}
            forcePage={pageNumber}
        />
    )
}

export default Pagination