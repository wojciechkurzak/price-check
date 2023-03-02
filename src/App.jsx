import { useState, useEffect } from 'react'
import UserContext from './UserContext'
import ItemRender from './components/ItemRender'
import DataLoading from './components/DataLoading'
import NameFilter from './components/NameFilter'
import CategoryFilter from './components/CategoryFilter'
import SubcategoryFilter from './components/SubcategoryFilter'
import Logo from './components/Logo'
import './App.scss'

function App() {
	const [data, setData] = useState('')
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [sub, setSub] = useState('')

	useEffect(() => {
		import('./data/ItemsData.json').then((data) => {
			setData(data.items)
		})
	}, [])

	return (
		<UserContext.Provider value={data}>
			<div className='top-wrapper'>
				<Logo />
				<div className='filters'>
					<NameFilter name={name} setName={setName} />
					<CategoryFilter
						category={category}
						setCategory={setCategory}
						setSub={setSub}
					/>
					<SubcategoryFilter
						sub={sub}
						setSub={setSub}
						category={category}
					/>
				</div>
			</div>
			<div className='data'>
				{data !== '' ? (
					<ItemRender name={name} category={category} sub={sub} />
				) : (
					<DataLoading />
				)}
			</div>
		</UserContext.Provider>
	)
}

export default App
