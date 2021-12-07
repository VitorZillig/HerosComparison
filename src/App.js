
import React,{useState,useEffect,useMemo} from 'react'
import './App.css';
import {Input} from './components/Input/Input';
import { HeroCardsWrapper } from './components/HeroCardsWrapper/HeroCardsWrapper';
// import GetFilteredHeros from './data/filterHerosList';
import { getMainInformation } from './data/handleHerosData';



function App() {
  const [heroName,setHeroName] = useState('')
  const [herosArray, setHerosArray] = useState([])

  const getFilteredHeros=useMemo(()=>{
    return herosArray.filter(hero=>
      hero.heroName.includes(heroName)
    )
  },[heroName,herosArray])
  


  useEffect(() => {
    getMainInformation().then(heros => {
      setHerosArray(heros)
    })

  }, [])


  // const listHerois=useMemo(()=>{
  //   return lista.filter(hero=>
  //     hero.name.includes(heroName)
  //   )
  // },[heroName,lista])


  return (
    <>
    <Input value = {heroName} setHeroName = {setHeroName}></Input>
    <HeroCardsWrapper filteredList = {getFilteredHeros} heroName = {heroName}></HeroCardsWrapper>
    </>
  );
}

export default App;
