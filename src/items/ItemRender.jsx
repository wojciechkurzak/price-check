import {useState, useContext} from 'react'
import ReactPaginate from 'react-paginate'
import UserContext from '../UserContext'
import ItemTemplate from './ItemTemplate'
import NameFilter from './NameFilter'
import './Pagination.scss'

const ItemRender = () => {
    const data = useContext(UserContext)

    const [pageNumber, setPageNumber] = useState(0)
    const [items, setItems] = useState(data.prices.values.filter(element => element[14] === '0' && element))

    //Data for pagination

    const itemsPerPage = 13
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const displayItems = items
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map(item => <ItemTemplate key={item[13]} item={item}/>)

    const pageChange = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <div>
            <NameFilter setItems={setItems}/>
            {displayItems}
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={''}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={'paginationButtons'}
                pageRangeDisplayed={(pageNumber !== 1 && pageNumber !== 2) ? 5 : 4}
                marginPagesDisplayed={0}
            />
        </div>
    )
}

export default ItemRender