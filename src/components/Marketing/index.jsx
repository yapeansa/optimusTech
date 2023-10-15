import { styled } from "styled-components"

const ContainerMarketing = styled.div`
    padding: 0 112px 96px;
    display: flex;
    gap: 32px;
`

const CardMarketing = styled.div`
    padding: 0;
    max-width: 280px;
    h2 {
        font-family: 'Inter SemiBold';
        font-size: 60px;
        color: #8E2424;
    }
    h3 {
        font-family: 'Inter Medium';
        font-size: 18px;
        color: #101828;
        margin-top: 12px;
    }
    p {
        font-size: 16px;
        color: #667085;
        margin-top: 8px;
    }
`

const Marketing = () => {

    const conteudoCard = [
        {
            id: 1,
            titulo: "400+",
            subtitulo: "Projetos concluídos",
            descricao: "Nós ajudamos a construir mais de 400 projetos incríveis."
        },
        {
            id: 2,
            titulo: "100+",
            subtitulo: "Colaboradores",
            descricao: "Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes."
        },
        {
            id: 3,
            titulo: "20K",
            subtitulo: "Downloads",
            descricao: "Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes."
        },
        {
            id: 4,
            titulo: "500+",
            subtitulo: "Reviews 5 estrelas",
            descricao: "Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos."
        }
    ]

    return (
        <ContainerMarketing>
            {conteudoCard.map(item =>
                <CardMarketing key={item.id}>
                    <h2>{item.titulo}</h2>
                    <h3>{item.subtitulo}</h3>
                    <p>{item.descricao}</p>
                </CardMarketing>
            )}
        </ContainerMarketing>
    )
}

export default Marketing
