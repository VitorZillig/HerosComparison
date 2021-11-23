import { getData } from "./getHerosData";

const getTotalStatus = (obj)=>{
    const statusValues = Object.values(obj)
    return statusValues.reduce((acc,cur)=>{
        return acc+cur
    },0)
}

export const getMainInformation = async()=>{
    const heroArray = await getData().then(heros=>heros)
    return heroArray.reduce((acc,cur)=>{
        let obj = {
            heroID:cur.id,
            heroName:cur.name,
            heroImage: cur.images.sm,
            heroPowerStats:cur.powerstats,
            heroTotalStats:getTotalStatus(cur.powerstats)
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