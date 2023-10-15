import { styled } from "styled-components"

const NavBar = styled.ul`
    display: flex;
    align-items: center;
    gap: 32px;
    li {
        font-family: 'Inter Medium';
        font-size: 16px;
        line-height: 24px;
        a {
            color: #667085;
        }
    }
`

export default NavBar
