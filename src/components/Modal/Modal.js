import React from 'react'
import Dialog from '@mui/material/Dialog';
import { getStatusWinner } from '../../data/handleHerosData';
import { getWinner} from './getWinner';
import { Combat } from './ModalStyle';

export const Modal = (props) => {

    const heroWinner = getWinner(props.combat)

    return (
        <Dialog maxWidth='xl' open={props.isOpened()} onClose={() => props.setCombat([])}>

            <Combat>

                <h2>WINNER</h2>
                <h1>{heroWinner.heroName}</h1>
                <div className="heros-combat">
                    {
                        props.combat.map(hero => {
                            return (
                                <div className="hero-combat-card">
                                    <section className="hero-image">
                                        <img src={hero.heroImage} alt={hero.heroName} />
                                        <span>{hero.heroName}</span>
                                    </section>
                                    <section className="hero-stats">

                                        {
                                            Object.entries(hero.heroPowerStats).map((stat, index) => {
                                                return (
                                                    <>
                                                        <br />
                                                        <div className="hero-stat">
                                                            <span>{stat[0]}</span>
                                                            <span className={stat[1] === getStatusWinner(props.combat)[index] ? 'winner' : 'loser'}>{stat[1]}</span>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        <br/>
                                        <div className="hero-stat">
                                            <span className = "total">TOTAL</span>
                                            <span className={`total ${hero.heroTotalStats === heroWinner.heroTotalStats ? 'winner' : 'loser'}`}>
                                            {hero.heroTotalStats}</span>
                                        </div>

                                    </section>
                                </div>
                            )
                        })

                    }
                </div>
            </Combat>
        </Dialog>
    )
}

