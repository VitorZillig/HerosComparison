import { getData } from "./getHerosData";

const getTotalStatus = (obj)=>{
    const statusValues = Object.values(obj)
    return statusValues.reduce((acc,cur)=>{
        return acc+cur
    },0)
}

export const getMainInformation = async()=>{
    const heroArray = await getData().then(heros=>heros)
    return heroArray.reduce((acc,{id,name,images,powerstats,appearance,biography})=>{
        let obj = {
            heroID:id,
            heroName:name,
            heroImage: images.sm,
            heroImageMd:images.md,
            heroPowerStats:powerstats,
            heroTotalStats:getTotalStatus(powerstats),
            heroParticulars:{
                heroRace: appearance.race,
                heroHeight:appearance.height[1],
                heroWeight:appearance.weight[1],
                heroPublisher:biography.publisher
            }
        }
        acc.push(obj)
        return acc

    },[])
}

export const getStatusWinner = (heros)=>{
    return Object.values(heros[0].heroPowerStats).map((stat,index)=>{
        const rivalHero = Object.values(heros[1].heroPowerStats)
        return Math.max(stat,rivalHero[index])
    })
}