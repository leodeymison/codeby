import styled from 'styled-components';

export const _Cart = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const _body = styled('div')`
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: #379ef2;
        border-radius: 10px;
    }
`