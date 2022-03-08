import './App.scss'
import { useState, useEffect } from 'react'
import UserContext from './UserContext'
import ItemRender from './items/ItemRender'

function App() {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
    }, [])

    return(
        <UserContext.Provider value={data}>
            {data !== '' && <ItemRender/>}
        </UserContext.Provider>
        )
}

export default App
