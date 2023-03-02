import React from 'react'
import '../styles/ItemTemplate.scss'

const ItemTemplate = ({ item }) => {
	const description = item.description
	const minBase = item.minBase
	const maxBase = item.maxBase
	const stock = Math.floor(Math.random() * 100)

	return (
		<div className='itemContainer'>
			<div className='item name'>
				<p className={`grade-${item.grade}`}>{description}</p>
			</div>
			<div className='item minBase'>
				<p>{minBase}</p>
			</div>
			<div className='item maxBase'>
				<p>{maxBase}</p>
			</div>
			<div className='item stock'>
				<p>{stock}</p>
			</div>
		</div>
	)
}

export default ItemTemplate
