import { styled } from "styled-components";
import Avatar from "../../assets/Avatar.svg";

const ContainerDepo = styled.section`
    padding: 0 112px 96px;
`;

const Depo = styled.div`
    padding: 64px;
    background: rgba(195, 25, 25, 0.03);
    border-radius: 16px;
    text-align: center;
    h3 {
        font-family: 'Inter SemiBold';
        font-size: 14px;
        color: #8E2424;
    }
    h4 {
        font-family: 'Inter Medium';
        font-size: 36px;
        color: #101828;
        margin: 16px 0 32px;
        max-width: 1088px;
    }
    img {
        width: 56px;
        max-width: 56px;
    }
    h5 {
        font-family: 'Inter Medium';
        font-size: 16px;
        color: #101828;
        margin: 16px 0 4px;
    }
    p {
        font-size: 14px;
        color: #667085;
    }
`;

const Depoimentos = () => {
    return (
        <ContainerDepo>
            <Depo>
                <h3>Veja o que nossos colaboradores falam sobre nós</h3>
                <h4>OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.</h4>
                <img src={Avatar} alt="Júlia Castro" />
                <h5>Júlia Castro</h5>
                <p>Desenvolvedora Web</p>
            </Depo>
        </ContainerDepo>
    );
};

export default Depoimentos;
