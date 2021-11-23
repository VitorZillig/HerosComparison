
import React,{useState} from 'react'
import './App.css';
import {Input} from './components/Input/Input';
import { HeroCardsWrapper } from './components/HeroCardsWrapper/HeroCardsWrapper';


function App() {
  const [heroName,setHeroName] = useState('')


  return (
    <>
    <Input value = {heroName} heroName = {setHeroName}></Input>
    <HeroCardsWrapper heroName = {heroName}></HeroCardsWrapper>
    </>
  );
}

export default App;
