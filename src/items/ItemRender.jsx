import {useState, useContext} from 'react'
import ReactPaginate from 'react-paginate'
import UserContext from '../UserContext'
import ItemTemplate from './ItemTemplate'

const ItemRender = () => {
    const data = useContext(UserContext)

    const [pageNumber, setPageNumber] = useState(0)
    const [items, setItems] = useState(data.prices.values.filter(element => element[14] === '0' && element))

    const itemsPerPage = 13
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(items.length / itemsPerPage)

    const displayItems = items
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map(item => <ItemTemplate key={item[13]} info={item}/>)

    const pageChange = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <div>
            {displayItems}
            <ReactPaginate
                previousLabel={'Prevoius'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={pageChange}
            />
        </div>
    )
}

export default ItemRender