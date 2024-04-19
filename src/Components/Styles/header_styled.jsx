import styled, { css } from "styled-components";

export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    /* border: solid 1px red; */
    background-color: #202329;
    height: 10vh;
    ${Center}
    /* justify-content: start; */
`
export const Navegation = styled.nav`
    /* border: solid 1px red; */
    width: 40vw;
    list-style:none;
    ${Center}
    justify-content: space-around;
    li{
        font-size: 1rem;
        font-weight: 500;
        color: white;
        cursor: pointer;
        &:hover{
            color: #55CC44; 
        }
    }
`
export const BoxNavegation = styled.div`
    /* border: solid 1px green; */
    width: 50vw;
    ${Center}
    justify-content: space-between;
`
export const Figure = styled.figure`
    /* border: solid 1px blue; */
    width: 12.8%;
    height: 7vh;
    ${Center}
    justify-content: flex-start;    
    img{
        width: 68%;
        cursor: pointer;
    }
`

