import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Hover = css`
    &:hover{
        cursor: pointer;
        color: #FF9800;
    }
`

export const Main = styled.main`
    /* border: solid 1px purple; */
    height: 320vh;
    background-color: #272B33;
    ${Center}
    flex-direction: column;
    justify-content: start;
    align-items: center;  
`
export const SecondSection = styled.section`
    /* border: solid 1px red; */
    padding-top: 1.8rem;
    width: 94%;
    height: 14vh;
    ${Center}
    align-items: end;
    a{
        /* border: solid 1px; */
        width: 3vw;
        height: 5vh;
        ${Center}
        color: #55CC44;
        cursor: pointer;
    }
    input{
        height: 3.5vh;
        width: 43%;
        height: 40%;
        border-style: none;
        border-radius: 7px;
        background-color: #202329;
        outline:none;
        padding-left: 1rem;
        color: #55CC44;
        &::placeholder{
            color: #55CC44;  
        }
    }
`

export const BoxCharacters = styled.div`
    /* border: solid 1px yellowgreen; */
    height: 100%;
    ${Center}
    align-items: start;
    justify-content: space-evenly;
    padding-top: 2rem;
    flex-wrap: wrap;
    /* gap: 1rem; */
`
export const Figure = styled.figure`
    border: solid 1px #3C3E44;
    border-radius: 10px;
    background-color: #3C3E44;
    width: 40vw;
    height: 23.7vh;
    ${Center}
    img{
        width: 30%;
        border-radius: 10px 0px 0px 10px;
    }
`
export const BoxDescription = styled.div`
    /* border: solid 1px green; */
    width: 90%;
    height: 23vh;
    ${Center}
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    h2{
        /* border: solid 1px red; */
        width: 23vw;
        font-size: 1.3rem;
        font-weight: bold;
        color: white;
        ${Hover}
        position: relative;
        left: 4%;
    }
`
export const Li = styled.li`
    /* border: solid 1px red; */
    width: 22vw;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    position: relative;
    left: 4%;
    bottom: 4%;
    &::marker{
        color: #55CC44;
    }
`
export const Description = styled.h3`
    /* border: solid 1px red; */
    width: 15vw;
    font-size: 0.9rem;
    font-weight: bold;
    color: #999792;
    position: relative;
    left: 4%;
    bottom: 3%;
`
export const P = styled.p`
    /* border: solid 1px red; */
    font-size: 1rem;
    font-weight: 200;
    color: white;
    ${Hover}
    position: relative;
    left: 4%;
    bottom: 4%;
`

