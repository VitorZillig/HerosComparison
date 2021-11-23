import { useState} from "react";
import { HeroCardStyle } from "./HeroCard-styles";


export const HeroCard = (props) => {

    const [isSelected, setIsSelected] = useState(false)
    return (
        <HeroCardStyle modalHerosList = {props.fightersList} setSelected = {setIsSelected} selected = {isSelected} onClick={() => {
            props.setFightersList([...props.fightersList, props.heroData])
            setIsSelected(!isSelected)
        }}>
            <section className="hero-image" >
                <img src={props.image} alt={props.name}></img>
            </section>
            <section className="hero-name">
                <h2>
                    {props.name}
                </h2>
            </section>
        </HeroCardStyle>
    )
}


