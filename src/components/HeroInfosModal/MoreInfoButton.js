import React from 'react'
import Button from '@mui/material/Button';
import {style} from './MoreInfoButtonStyle'

const MoreInfoButton = props=>{
    return(

        <Button sx = {style} variant = "contained" onClick = {(e)=>{
            e.stopPropagation();
            props.setHeroToOpenModal([props.hero])
        }}>+ INFO</Button>

    )
}

export default MoreInfoButton