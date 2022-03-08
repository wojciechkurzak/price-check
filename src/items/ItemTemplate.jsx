import React from 'react'

const ItemTemplate = ({info}) => {
    return (
        <div>
            <p>{info[0]} | {info[2]} | {info[3]} | {info[4]} | {info[5]}</p>
        </div>
    )
}

export default ItemTemplate