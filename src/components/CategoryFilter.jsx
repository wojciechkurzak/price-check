import { useContext } from 'react'
import UserContext from '../UserContext'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import '../styles/CategoryFilter.scss'

//Styling for select

const SelectCategoryStyle = {
	'&': {
		color: '#fff',
		backgroundColor: '#222',
		borderRadius: '4px',
	},
	'.MuiSelect-select': {
		color: '#fff',
	},
	'label.Mui-focused': {
		color: '#fff',
	},
	svg: {
		color: '#fff',
	},
	'.MuiFilledInput-underline::after': {
		borderBottomColor: '#fff',
	},
	'.MuiMenuItem-root': {
		color: '#fff',
		backgroundColor: '#222',
	},
}

const CategoryFilter = ({ category, setCategory, setSub }) => {
	const data = useContext(UserContext)

	//Changing value of subcategory to empty string if category isn't set
	const setValues = (e) => {
		setCategory(e.target.value)
		setSub('')
	}

	//All possible main categories
	const categories =
		data !== '' ? [...new Set(data.map((item) => item.mainLabel))] : null

	return (
		<div className='categoryFilter'>
			<FormControl
				variant='filled'
				sx={SelectCategoryStyle}
				fullWidth={true}
			>
				<InputLabel>Category</InputLabel>
				<Select value={category} onChange={setValues} label='Category'>
					<MenuItem value={''}>None</MenuItem>
					{data !== '' &&
						categories.map((label) => (
							<MenuItem key={label} value={label}>
								{label}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	)
}

export default CategoryFilter
