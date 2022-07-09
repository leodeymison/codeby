import styled from "styled-components";

export const _Card = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #aaa;
`
export const _Img = styled('img')`
    width: 100px;
    height: 100px;
`

export const _Span = styled('span')`
    text-decoration: line-through;
    font-weight: 100;
`

export const _Remove = styled('div')`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 1em;
    svg {
        cursor: pointer;
        padding: 10px;
        &:hover{
            background-color: #fa030336;
        }
    }
`