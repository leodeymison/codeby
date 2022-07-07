import styled from "styled-components";

export const _ButtonFunc = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #379ef2;
    color: white;
    font-weight: 600;
    width: 100%;
    padding: 1em 0;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
`

export const _Message = styled('div')`
    background-color: #00ff005c;
    text-align: center;
    border-radius: 20px;
    padding: .5em 1em;
`


type QuantType = {
    BColor?: string,
    color?: string
}
export const _Quant = styled('button')<QuantType>`
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.BColor || '#fff'};
    color: ${props => props.color || 'black'};
    border: none;
`

export const _QuantBox = styled('div')`
    display: flex;
`