import React from 'react'
import './ItemTemplate.scss'

const ItemTemplate = ({info}) => {
    const name = info[16]
    const minBase = info[7]
    const maxBase = info[6]
    const stock = Math.floor(Math.random() * 100)

    return (
        <div className='itemContainer'>
            <div className='item name'>
                <p>{name}</p>
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