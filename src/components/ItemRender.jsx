import { useState, useContext, useEffect } from 'react'
import UserContext from '../UserContext'
import ItemTemplate from './ItemTemplate'
import NoResult from './NoResult'
import Pagination from './Pagination'

const ItemRender = ({ name, category, sub }) => {
	const data = useContext(UserContext)

	const [pageNumber, setPageNumber] = useState(0)

	//Forcing page to first one when filter is applied
	useEffect(() => {
		setPageNumber(0)
	}, [name, category, sub])

	//Data for pagination
	const itemsPerPage = 13
	const pagesVisited = pageNumber * itemsPerPage

	//Filtering data
	const filterItems = data.prices.values.filter(
		(element) =>
			name.toLowerCase() ===
				element[16].slice(0, name.length).toLowerCase() &&
			category === element[0].slice(0, category.length) &&
			sub === element[1].slice(0, sub.length) &&
			element[14] === '0' &&
			element
	)

	//Number of pages
	const pageCount = Math.ceil(filterItems.length / itemsPerPage)

	//Displaying data
	const displayItems = filterItems
		.slice(pagesVisited, pagesVisited + itemsPerPage)
		.map((item) => <ItemTemplate key={item[13]} item={item} />)

	return (
		<>
			{displayItems.length !== 0 ? displayItems : <NoResult />}
			{displayItems.length !== 0 ? (
				<Pagination
					pageNumber={pageNumber}
					setPageNumber={setPageNumber}
					pageCount={pageCount}
				/>
			) : null}
		</>
	)
}

export default ItemRender
