import React from 'react'
import { getMainInformation } from "../../data/handleHerosData"
import { HeroCard } from "../HeroCard/HeroCard"
import { HeroCardsWrapperStyle } from "./HeroCardsWrapper-style"
import { useEffect, useState } from "react"
import {Spinner} from "../Spinner/Spinner"
import { Modal } from "../Modal/Modal"
import HeroInfosModal from '../HeroInfosModal/HeroInfosModal'


export const HeroCardsWrapper = (props) => {
  
  const [heroToOpenModal,setHeroToOpenModal] = useState([])
  let [fighters, setFighters] = useState([])
  let [isLoading,setIsLoading] = useState(true)



  useEffect(() => {
    getMainInformation().then(_=> {
      setIsLoading(false)
    })

  }, [])


  const shoudOpen = () => {

    if (fighters.length!==0 && fighters.length === 2  && fighters[0].heroID !== fighters[1].heroID) {
      return true
    } else {
        setFighters([])
        return false
    }

  }

  return (
    <>
      { fighters.length===2?
        <Modal
        combat={fighters}
        setCombat={setFighters}
        isOpened={shoudOpen}
      >

      </Modal>:''
      }
      {
        heroToOpenModal.length?
        <HeroInfosModal hero = {heroToOpenModal} clearHero = {setHeroToOpenModal}/>:''
      }
      <HeroCardsWrapperStyle>
        
     {isLoading? <Spinner />:''}

          {
          props.filteredList.map(hero=>{
            return(
              <HeroCard
                heroData={hero}
                setHeroToOpenModal = {setHeroToOpenModal}
                fightersList={fighters}
                setFightersList={setFighters}
                name={hero.heroName}
                image={hero.heroImage}
              >

              </HeroCard>
            )
          })
        }
      </HeroCardsWrapperStyle>
    </>
  )

}