import { styled } from "styled-components";

const NavBar = styled.nav`
    .hamb-menu {
        display: none;
    }
    ul {
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
    }

    @media screen and (max-width: 600px) {
        .hamb-menu {
            display: block;
        }
        ul {
            display: none;
        }
    }
`;

export default NavBar;
