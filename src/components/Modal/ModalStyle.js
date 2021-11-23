import  styled  from 'styled-components';

export const Combat = styled.div`

    h1{
        font-size:3rem;
        color:#00ff00;
        text-transform:uppercase;
    }
    
    h2 {
        font-size:1.5rem;
        color: #ffcd05;
    }
    
    display:flex;

    align-items:center;

    font-family: 'Aldrich', sans-serif;

    flex-direction:column;

    background: rgb(2,0,36);

    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(48,48,179,1) 24%, rgba(0,212,255,1) 96%);
    
    padding:20px;

    .winner {
        color: #16db19
    }

    .total {
        font-size:2rem;
    }

    .loser {
        color: red
    }

    .heros-combat{
        display:flex;
        gap:2vw;
    }


    .hero-combat-card {
        display:flex;
        gap:20px
    }

    .hero-combat-card:last-child{
        display:flex;
        flex-direction:row-reverse;
    }

    .hero-stat{
        display:flex;
        justify-content:space-between;  
        gap:20px; 
        text-transform:capitalize;
    }

 
    .hero-combat-card:last-child .hero-stat {
        display:flex;
        flex-direction:row-reverse;
    }


    .hero-image {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        text-transform:uppercase;
        font-size:1.5rem;
        font-weight:bold;
    }
    
`