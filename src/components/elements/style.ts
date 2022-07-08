import styled from "styled-components";

type _ButtonFuncType = {
    BColor: string
}
export const _ButtonFunc = styled('button')<_ButtonFuncType>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.BColor};
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
    cursor: pointer;
`

export const _QuantBox = styled('div')`
    display: flex;
`

export const _QuantCart = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background-color: #379ef2;
    color: white;
    border-radius: 100%;
    height: 15px;
    width: auto;
    padding: 0 5px;
    margin: -10px 0 0 -5px;
`