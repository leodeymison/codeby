import styled from "styled-components";

export const _Card = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 1px #aaa;
    width: 45%;
    padding: 1em;
    margin: 0.5%;
    @media (max-width: 888px){
        width: 100%;
        img {
            width: 60%;
        }
    }
`
export const _Img = styled('img')`
    width: 100%;
`

export const _Span = styled('span')`
    text-decoration: line-through;
    font-weight: 100;
`