import { useContext } from 'react'
import UserContext from '../UserContext'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import '../styles/SubcategoryFilter.scss'

//Styling for select

const SelectSubcategoryStyle = {
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
}

const SubcategoryFilter = ({ sub, setSub, category }) => {
	const data = useContext(UserContext)

	//Sub categories depending on main category
	const subcategories =
		data !== ''
			? [
					...new Set(
						data.map(
							(item) =>
								item.mainLabel === category && item.subLabel
						)
					),
			  ]
			: null

	return (
		<div className='subcategoryFilter'>
			<FormControl
				variant='filled'
				sx={SelectSubcategoryStyle}
				fullWidth={true}
			>
				<InputLabel>Sub-category</InputLabel>
				<Select
					value={sub}
					onChange={(event) => {
						setSub(event.target.value)
					}}
					label='Subcategory'
				>
					<MenuItem value={''}>None</MenuItem>
					{data !== '' &&
						subcategories.map((label) => (
							<MenuItem key={label} value={label}>
								{label}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	)
}

export default SubcategoryFilter
