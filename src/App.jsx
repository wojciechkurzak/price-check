import './App.scss'
import { useState, useEffect } from 'react'
import UserContext from './UserContext'
import ItemRender from './items/ItemRender'
import DataLoading from './misc/DataLoading'

function App() {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return(
        <UserContext.Provider value={data}>
            <div className='dataContainer'>
                {data !== '' ? <ItemRender/> : <DataLoading/>}
            </div>
            
        </UserContext.Provider>
        )
}

export default App
