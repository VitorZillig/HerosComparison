import { getMainInformation } from "../../data/handleHerosData"
import { HeroCard } from "../HeroCard/HeroCard"
import { HeroCardsWrapperStyle } from "./HeroCardsWrapper-style"
import { useEffect, useState } from "react"
import {Spinner} from "../Spinner/Spinner"
import { Modal } from "../Modal/Modal"


export const HeroCardsWrapper = (props) => {
  
  
  let [herosArray, setHerosArray] = useState([])
  let [fighters, setFighters] = useState([])
  let [isLoading,setIsLoading] = useState(true)



  useEffect(() => {
    getMainInformation().then(heros => {
      setHerosArray(heros)
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
      <HeroCardsWrapperStyle>
        
     {isLoading? <Spinner />:''}

        {herosArray.map(hero => {
          if (hero.heroName.toLowerCase().includes(props.heroName.toLowerCase()))
            return (
              <HeroCard
                heroData={hero}
                fightersList={fighters}
                setFightersList={setFighters}
                name={hero.heroName}
                image={hero.heroImage}
              >

              </HeroCard>
            )
        }
        )}
      </HeroCardsWrapperStyle>
    </>
  )

}