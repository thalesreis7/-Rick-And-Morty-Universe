import styled, { css } from "styled-components";

export const Center = css `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.footer`
    /* border: solid 1px yellowgreen; */
    background-color: #202329;
    height: 7vh;
    ${Center}
    p{
        font-size: 1rem;
        font-weight: 300;
        color: #B5D142;
    }
`