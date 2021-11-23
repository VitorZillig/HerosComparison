import styled from 'styled-components'

export const HeroCardStyle = styled.div`
    background-color:${props => {
        if (!props.selected || props.modalHerosList.length === 0) {
            props.setSelected(false)
            return '#343FE1'
        } else
            return '#FF9801'
    }};

    &:hover{
        background-color:${props => props.selected ? '#FF9801' : '#fc2c03'};
        cursor: pointer;

    };
    transition: background-color 0.3s;
    
    display: flex;

    padding:10px;

    width: 270px;

    border-radius:10px;

    .hero-name{
        display:flex;
        justify-content:center;
        align-items:center
    }

    h2{
        color:#FFFF
    }

    `