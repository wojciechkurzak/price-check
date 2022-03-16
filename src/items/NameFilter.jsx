import {useContext} from 'react'
import UserContext from '../UserContext'
import TextField from '@mui/material/TextField';

const InputNameStyle = {
    '&': {
        backgroundColor: '#222',
    },
    'label': {
        color: '#fff'
    },
    'label.Mui-focused': {
        color: '#fff'
    },
    'input': {
        color: '#fff'
    },
    '.MuiFilledInput-underline::after': {
        borderBottomColor: '#fff'
    }
}

const NameFilter = ({setItems}) => {
    const data = useContext(UserContext)

    const newData = (input) => {
        const newItems = data.prices.values
            .filter((element) => 
                        input.toLowerCase() === element[16].slice(0, input.length).toLowerCase() 
                        && element[14] === '0' 
                        && element)

        setItems(newItems)
    }

    return (
        <div className='itemFilters'>
            <TextField 
                id="filled-basic" 
                label="Name" 
                variant="filled" 
                onChange={(e) => {newData(e.target.value)}} 
                sx={InputNameStyle}
            />
        </div>
        )
}

export default NameFilter