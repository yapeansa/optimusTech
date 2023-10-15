import { styled } from "styled-components"

const BotaoLogin = styled.button`
    font-family: 'Inter Medium';
    font-size: 16px;
    background: ${ props => props.$acao === 'entrar' ? '#fff' : '#8E2424' };
    border-radius: 8px;
    padding: 10px 18px;
    color: ${ props => props.$acao === 'entrar' ? '#667085' : '#fff' };
    border: none;
    cursor: pointer;
`

export default BotaoLogin
