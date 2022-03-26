import {useContext} from 'react'
import UserContext from '../UserContext'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import './SubcategoryFilter.scss'

//Styling for select 

const SelectSubcategoryStyle = {
    '&': {
        color: '#fff',
        backgroundColor: '#222',
        borderRadius: '4px'
    },
    '.MuiSelect-select':{
        color: '#fff'
    },
    'label.Mui-focused':{
        color: '#fff'
    },
    'svg': {
        color: '#fff'
    },
    '.MuiFilledInput-underline::after': {
        borderBottomColor: '#fff'
    },
}

const SubcategoryFilter = ({sub, setSub, category}) => {
    const data = useContext(UserContext)

    //Sub categories depending on main category
    const subcategories = data !== '' ? [...new Set(data.prices.values.map(e => e[0] === category && e[1]))].slice(1) : null
        
    return (
        <div className='subcategoryFilter'>
            <FormControl variant="filled" sx={SelectSubcategoryStyle} fullWidth={true}>
                <InputLabel>Sub-category</InputLabel>
                <Select
                    value={sub}
                    onChange={(e) => {setSub(e.target.value)}}
                    label="Subcategory"
                >   
                    <MenuItem value={''}>None</MenuItem>
                    {data !== '' && subcategories.map((e) => <MenuItem key={e} value={e}>{e}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default SubcategoryFilter