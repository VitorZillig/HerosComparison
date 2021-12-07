import React from 'react'
import {inputStyle} from './Input-style'
import useDebounce from "../../hooks/useDebounce";
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import {AiOutlineSearch} from 'react-icons/ai'


export const Input = (props)=>{
    const handleSearch = useDebounce(props.setHeroName,150)
    const handleInput=(e)=>{
        handleSearch(e.target.value)
    }
    return (
        <TextField InputProps = {{
            startAdornment:(
                <InputAdornment position = "start">
                 <AiOutlineSearch/>   
                </InputAdornment>
            )
        }} sx = {inputStyle} variant = "filled" label = "Type a hero name" onChange = {(e)=>handleInput(e)} ></TextField>
    )
} 

