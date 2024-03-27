import { styled } from "styled-components";
import BotaoLogin from "../Header/BotaoLogin";

const ContainerFooter = styled.div`
    padding: 96px 0;
    text-align: center;
    background: #F9FAFB;
    h2 {
        font-family: 'Inter SemiBold';
        font-size: 36px;
        color: #101828;
    }
    p {
        font-size: 20px;
        color: #667085;
        margin-top: 20px;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        margin: 40px 0 32px;
    }
    .footer-text {
        font-size: 16px;
        color: #98A2B3;
    }
`;

const CampoEmail = styled.input`
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    padding: 12px 14px 12px 16px;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    width: 360px;
    max-width: 360px;
`;

const Footer = ({ placeholder, aoFocar }) => {
    return (
        <ContainerFooter>
            <h2>Acompanhe as nossas oportunidades</h2>
            <p>Seja o primeiro a saber quando novas vagas serão abertas!</p>
            <div>
                <CampoEmail placeholder={placeholder} onFocus={aoFocar} onBlur={aoFocar} />
                <BotaoLogin>Cadastrar</BotaoLogin>
            </div>
            <p className="footer-text">© 2022 OptimusTech. Todos os direitos reservados.</p>
        </ContainerFooter>
    );
};

export default Footer;
