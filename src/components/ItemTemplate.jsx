import React from 'react'
import '../styles/ItemTemplate.scss'

const ItemTemplate = ({ item }) => {
	const name = item[16]
	const minBase = item[6]
	const maxBase = item[7]
	const stock = Math.floor(Math.random() * 100)

	return (
		<div className='itemContainer'>
			<div className='item name'>
				<p className={`grade-${item[11]}`}>{name}</p>
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
