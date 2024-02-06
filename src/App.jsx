import EstilosGlobais from "./components/EstilosGlobais"
import { styled } from "styled-components"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Marketing from "./components/Marketing"
import Vagas from "./components/Vagas"
import AreasDisponiveis from "./components/AreasDisponiveis"
import Depoimentos from "./components/Depoimentos"
import Footer from "./components/Footer"
import { useState } from "react"

const MainContainer = styled.main`
    max-width: 1440px;
    margin: 0 auto;
`

const App = () => {

    const [texto, setTexto] = useState('Seu e-mail')

    const aoFocar = () => texto !== '' ? setTexto('') : setTexto('Seu e-mail')

    return (
        <>
            <MainContainer>
                <EstilosGlobais />
                <Header />
                <Banner />
                <Marketing />
                <Vagas />
                <AreasDisponiveis />
                <Depoimentos />
            </MainContainer>
            <Footer placeholder={texto} aoFocar={aoFocar} />
        </>
    )
}

export default App
