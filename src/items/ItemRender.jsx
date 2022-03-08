import {useContext} from 'react'
import UserContext from '../UserContext'
import ItemTemplate from './ItemTemplate'

const ItemRender = () => {
    const data = useContext(UserContext)

    return (
        <div>
            {data.prices.values.map(element => 
                <ItemTemplate key={element[1]} info={element}/>
            )}
        </div>
    )
}

export default ItemRender