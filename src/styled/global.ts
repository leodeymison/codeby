import styled, { createGlobalStyle, css } from 'styled-components';
import { theme, GlobalProps, ContainerProps, HeadingProps } from './global.types';


export const _Global = createGlobalStyle<GlobalProps>`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
    * {
       
        margin: 0px;
        padding: 0px;
        background-color: ${props => theme.bColor[props.theme || 'ligth'].primary};
        font-family: 'Poppins', sans-serif;
    }
`;

export const _Container = styled.div<ContainerProps>`
    display: ${props => props.dplay || "block"};
    padding: ${props => props.pd+'em' || '0em' };
    justify-content: ${props => props.justifyC || 'flex-start'};
`;

export const _Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.textAlign || 'left'};
    width: 100%;
`;

export const _Main = styled('div')`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-color: #eee;
    overflow: hidden;
`
export const _MainSub = styled('div')`
    width: 900px;
    height: 100vh;
    overflow: hidden;
`

export const _Card = styled('div')`
    display: block;
    border: solid 1px black;
`