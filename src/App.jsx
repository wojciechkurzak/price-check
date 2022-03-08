import './App.scss'
import { useState, useEffect } from 'react'

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

    return <p>Hello world!</p>
}

export default App
