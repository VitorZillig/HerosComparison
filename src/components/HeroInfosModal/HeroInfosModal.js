import React from 'react';
import Dialog from '@mui/material/Dialog';
import {HeroInfosModalStyle,style} from './HerosInfosModalStyle';
import Typography from '@mui/material/Typography';

export default props => {
    console.log(props)
    let hero = props.hero[0]
    return (
        <Dialog open={true} onClose={() => props.clearHero([])}>
            <HeroInfosModalStyle>
                <div className = "hero-name">
                    <Typography sx = {style} variant = "h2">{hero.heroName}</Typography>
                </div>
                <div className= "hero-infos">
                    <div className = "hero-image">
                        <img src={hero.heroImageMd}></img>
                    </div>
                <div className = "hero-stats">
                {
                    Object.entries(hero.heroPowerStats).map((stat, index) => {
                        return (
                            <>
                                <br />
                                <div key = {index} className="hero-stat">
                                    <Typography variant = "subtitle1">{stat[0]}: </Typography>
                                    <Typography variant = "subtitle1">{stat[1]}</Typography>
                                </div>
                            </>
                        )
                    })
                }
                {
                    Object.entries(hero.heroParticulars).map((particular,index)=>{
                        return(
                            <>
                                <br />
                                <div key = {index} className="hero-stat">
                                    <Typography variant = "subtitle2">{particular[0]}: </Typography>
                                    <Typography variant = "subtitle2">{particular[1]}</Typography>
                                </div>
                            </>
                        )
                    })
                }
                </div>
                </div>

            </HeroInfosModalStyle>
        </Dialog>
    )
}