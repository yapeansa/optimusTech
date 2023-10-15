import { styled } from "styled-components"

const ContainerEspecialidades = styled.section`
    padding: 0 112px 96px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
`

const Vaga = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 768px;
    max-width:768px;
    h3 {
        font-size: 'Inter Medium';
        margin-bottom: 8px;
        font-size: 20px;
        color: #101828;
    }
`

const Especialidade = styled.div`
    border: 1px solid #EAECF0;
    border-radius: 16px;
    padding: 24px 24px 28px;
    h4 {
        font-family: 'Inter Medium';
        font-size: 18px;
        color: #101828;
    }
    div {
        display: flex;
        gap: 24px;
        p {
            font-family: 'Inter Medium';
            font-size: 16px;
            color: #667085;
            margin-top: 32px;
        }
    }
`

const AreasDisponiveis = () => {

    const vagas = [
        {
            id: 1,
            vaga: "Design",
            especialidades: [
                {
                    id: 1,
                    cargo: "Product Designer",
                    disponibilidade: "Full-time",
                    faixaSalarial: "R$7.000"
                },
                {
                    id: 2,
                    cargo: "UX Designer",
                    disponibilidade: "Full-time",
                    faixaSalarial: "R$6.000"
                }
            ]
        },
        {
            id: 2,
            vaga: "Desenvolvimento de Software",
            especialidades: [
                {
                    id: 1,
                    cargo: "Desenvolvedor(a) iOS",
                    disponibilidade: "Full-time",
                    faixaSalarial: "R$8.000"
                },
                {
                    id: 2,
                    cargo: "Desenvolvedor(a) Front-end",
                    disponibilidade: "Full-time",
                    faixaSalarial: "R$7.000"
                },
                {
                    id: 3,
                    cargo: "Desenvolvedor(a) Back-end",
                    disponibilidade: "Full-time",
                    faixaSalarial: "R$8.000"
                }
            ]
        }
    ]

    return (
        <ContainerEspecialidades>
            {vagas.map(item =>
                <Vaga key={item.id}>
                    <h3>{item.vaga}</h3>
                    {item.especialidades.map(especialidade =>
                        <Especialidade key={especialidade.id}>
                            <h4>{especialidade.cargo}</h4>
                            <div>
                                <p>{especialidade.disponibilidade}</p>
                                <p>Faixa salarial: {especialidade.faixaSalarial}</p>
                            </div>
                        </Especialidade>)}
                </Vaga>)}
        </ContainerEspecialidades>
    )
}

export default AreasDisponiveis
