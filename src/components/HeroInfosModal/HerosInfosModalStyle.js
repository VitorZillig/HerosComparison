import styled from 'styled-components';

const style = {
    fontSize:"30px",
}

const HeroInfosModalStyle = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(48,48,179,1) 24%, rgba(0,212,255,1) 96%);
    .hero-infos{
        display: flex;
        align-items:center;
        gap:10px;
    }
    .hero-stat{
        display:flex;
        text-transform:capitalize
    }

    .hero-image{
        width:250px;
        img{
            width:100%
        }
    }

`

export{
    HeroInfosModalStyle,
    style
} 
