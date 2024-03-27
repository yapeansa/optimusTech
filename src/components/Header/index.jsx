import ContainerLogo from "./Logo";
import NavBar from "./MenuPrincipal";
import BotaoLogin from "./BotaoLogin";
import { styled } from "styled-components";

const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 112px;
    min-height: 80px;
`;

const ContainerMenuLogo = styled.div`
    display: flex;
    gap: 119px;
`;

const ContainerLogin = styled.div`
    display: flex;
    gap: 12px;
`;

const Header = () => {

    const menu = [
        {
            nome: "Home",
            id: 1
        },
        {
            nome: "Produtos",
            id: 2
        },
        {
            nome: "Recursos",
            id: 3
        },
        {
            nome: "Sobre nós",
            id: 4
        }
    ];

    return (
        <>
            <ContainerHeader>
                <ContainerMenuLogo>
                    <ContainerLogo>
                        <img src="./logo.svg" alt="Logo Optimus Tech" />
                    </ContainerLogo>
                    <NavBar>
                        {menu.map(item => <li key={item.id}><a href="#">{item.nome}</a></li>)}
                    </NavBar>
                </ContainerMenuLogo>
                <ContainerLogin>
                    <BotaoLogin $acao="entrar">Entrar</BotaoLogin>
                    <BotaoLogin>Cadastrar</BotaoLogin>
                </ContainerLogin>
            </ContainerHeader>
        </>
    );
};

export default Header;
