import TextField from '@mui/material/TextField'
import '../styles/NameFilter.scss'

// Styling for name input

const InputNameStyle = {
	'&': {
		backgroundColor: '#222',
		borderRadius: '4px',
	},
	'label.Mui-focused': {
		color: '#fff',
	},
	input: {
		color: '#fff',
	},
	'.MuiFilledInput-underline::after': {
		borderBottomColor: '#fff',
	},
}

const NameFilter = ({ name, setName }) => {
	return (
		<div className='nameFilter'>
			<TextField
				id='filled-basic'
				label='Name'
				variant='filled'
				autoComplete='off'
				value={name}
				onChange={(event) => {
					setName(event.target.value)
				}}
				sx={InputNameStyle}
				fullWidth={true}
			/>
		</div>
	)
}

export default NameFilter
