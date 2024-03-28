import { styled } from "styled-components";
import BannerVagas from "../../assets/banner.svg";

const ContainerVagas = styled.section`
    padding: 96px 0 64px;
    text-align: center;
    h2 {
        font-family: 'Inter Medium';
        font-size: 14px;
        padding: 4px 12px;
        color: #8E2424;
        background: rgba(142, 36, 36, 0.05);
        display: inline-block;
        border-radius: 16px;
    }
    h3 {
        font-family: 'Inter SemiBold';
        font-size: 36px;
        color: #101828;
        margin: 16px 0 0;
    }
    p {
        margin: 20px 0 64px;
        font-size: 20px;
        color: #667085;
    }
    img {
        max-width: 100%;
    }

    @media screen and (max-width: 600px) {
        padding: 0 1rem 64px;
    }
`;

const Vagas = () => {
    return (
        <ContainerVagas>
            <h2>Vagas abertas</h2>
            <h3>Estamos procurando por talentos</h3>
            <p>Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>
            <img src={BannerVagas} alt="Banner Vagas" />
        </ContainerVagas>
    );
};

export default Vagas;
