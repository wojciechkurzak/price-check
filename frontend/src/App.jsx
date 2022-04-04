import './App.scss'
import { useState, useEffect } from 'react'
import UserContext from './UserContext'
import ItemRender from './items/ItemRender'
import DataLoading from './misc/DataLoading'
import NameFilter from './filters/NameFilter'
import CategoryFilter from './filters/CategoryFilter'
import SubcategoryFilter from './filters/SubcategoryFilter'
import Logo from './misc/Logo'

function App() {
    const [data, setData] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [sub, setSub] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return(
        <UserContext.Provider value={data}>
            <div className='top-wrapper'>
                <Logo />
                <div className='filters'>
                    <NameFilter name={name} setName={setName}/>
                    <CategoryFilter category={category} setCategory={setCategory} setSub={setSub}/>
                    <SubcategoryFilter sub={sub} setSub={setSub} category={category}/>
                </div>
            </div>
            <div className='data'>
                {data !== '' ? <ItemRender name={name} category={category} sub={sub}/> : <DataLoading/>}
            </div>
        </UserContext.Provider>
        )
}

export default App
