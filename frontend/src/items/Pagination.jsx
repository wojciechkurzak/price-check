import React from 'react'
import ReactPaginate from 'react-paginate'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import './Pagination.scss'

const Pagination = ({pageNumber, setPageNumber, pageCount}) => {
    const pageChange = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <ReactPaginate
            previousLabel={<ArrowBackIosNewSharpIcon/>}
            nextLabel={<ArrowForwardIosSharpIcon/>}
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