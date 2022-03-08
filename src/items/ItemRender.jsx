import {useContext} from 'react'
import UserContext from '../UserContext'
import ItemTemplate from './ItemTemplate'

const ItemRender = () => {
    const data = useContext(UserContext)

    return (
        <div>
            {data.prices.values.map(element =>
                element[14] === '0' && <ItemTemplate key={element[13]} info={element}/>
            )}
        </div>
    )
}

export default ItemRender