import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

//Styling for select 

const SelectCategoryStyle = {
    '&': {
        color: '#fff',
        minWidth: '120px',
        backgroundColor: '#222'
    },
    'label': {
        color: '#fff'
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

const CategoryFilter = ({category, setCategory}) => {
    //All possible main categories

    const categories = ['Main Weapon', 'Sub-weapon', 'Awakening', 'Armor', 'Accessories', 'Lightstone', 
                        'Material' ,'Enhancement/Upgrade', 'Consumables', 'Life Tools', 'Alchemy Stone',
                        'Magic Crystal', 'Pearl Item', 'Dye', 'Mount', 'Ship', 'Wagon', 'Furniture']

    return (
        <div className='categoryFilter'>
            <FormControl variant="filled" sx={SelectCategoryStyle}>
            <InputLabel>Age</InputLabel>
            <Select
                value={category}
                onChange={(e) => {setCategory(e.target.value)}}
                label="Age"
            >   
                <MenuItem value={''}>None</MenuItem>
                {categories.map((e) => <MenuItem key={e} value={e}>{e}</MenuItem>)}
            </Select>
            </FormControl>
        </div>
    )
}

export default CategoryFilter