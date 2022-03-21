import {useState, useContext, useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import UserContext from '../UserContext'
import ItemTemplate from './ItemTemplate'
import NameFilter from '../filters/NameFilter'
import CategoryFilter from '../filters/CategoryFilter'
import SubcategoryFilter from '../filters/SubcategoryFilter'
import NoResult from '../misc/NoResult'
import './Pagination.scss'

const ItemRender = () => {
    const data = useContext(UserContext)

    const [pageNumber, setPageNumber] = useState(0)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [sub, setSub] = useState('')
    
    //Forcing page to first one when filter is applied

    useEffect(() => {
        setPageNumber(0)
    }, [name, category, sub])

    
    //Data for pagination

    const itemsPerPage = 13
    const pagesVisited = pageNumber * itemsPerPage

    //Filtering data

    const filterItems = data.prices.values
            .filter((element) => 
                        name.toLowerCase() === element[16].slice(0, name.length).toLowerCase() 
                        && category === element[0].slice(0, category.length)
                        && sub === element[1].slice(0, sub.length)
                        && element[14] === '0' 
                        && element)

    //Number of pages

    const pageCount = Math.ceil(filterItems.length / itemsPerPage)

    //Displaying data

    const displayItems = filterItems
            .slice(pagesVisited, pagesVisited + itemsPerPage)
            .map(item => <ItemTemplate key={item[13]} item={item}/>)

    const pageChange = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <>
            <NameFilter name={name} setName={setName}/>
            <CategoryFilter category={category} setCategory={setCategory} setSub={setSub}/>
            <SubcategoryFilter sub={sub} setSub={setSub} category={category}/>
            {displayItems.length !== 0 ? displayItems : <NoResult />}
            {displayItems.length !== 0 ? 
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
                : null}
        </>
    )
}

export default ItemRender