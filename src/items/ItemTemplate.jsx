import React from 'react'

const ItemTemplate = ({info}) => {
    const name = info[16]
    const minBase = info[7]
    const maxBase = info[6]
    const stock = Math.floor(Math.random() * 100)

    return (
        <div>
            <p>{name} | {minBase} | {maxBase} | {stock}</p>
        </div>
    )
}

export default ItemTemplate