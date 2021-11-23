import { InputStyle } from "./Input-style";

export const Input = (props)=>{
    return (
        <InputStyle placeholder = "Type a hero name" value = {props.value} onChange = {(e)=>{props.heroName(e.target.value)}} ></InputStyle>
    )
} 

