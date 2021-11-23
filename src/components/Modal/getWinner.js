
export const getWinner = (heros)=>{
   return heros.reduce((acc,cur)=>{
       return cur.heroTotalStats>acc.heroTotalStats?cur:acc
   })
}

