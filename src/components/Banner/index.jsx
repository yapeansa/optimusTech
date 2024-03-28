import { styled } from "styled-components";

const ContainerBanner = styled.div`
    padding: 96px 0;
    text-align: center;
    h1 {
        font-family: 'Inter SemiBold';
        font-size: 16px;
        color: #8E2424;
    }
    h2 {
        font-family: 'Inter SemiBold';
        font-size: 48px;
        color: #101828;
        margin: 24px 0;
    }
    p {
        font-size: 20px;
        color: #667085;
        max-width: 791px;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
        padding: 96px 1rem;
    }
`;

const Banner = () => {
    return (
        <ContainerBanner>
            <h1>Sobre nós</h1>
            <h2>Por que somos diferentes?</h2>
            <p>Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas.</p>
        </ContainerBanner>
    );
};

export default Banner;
