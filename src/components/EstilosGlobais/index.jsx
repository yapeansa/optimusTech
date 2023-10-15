import { createGlobalStyle } from "styled-components"
import InterRegular from "./fontes/Inter-Regular.ttf"
import InterMedium from "./fontes/Inter-Medium.ttf"
import InterSemiBold from "./fontes/Inter-SemiBold.ttf"

const EstilosGlobais = createGlobalStyle`
@font-face {
    font-family: 'Inter Regular';
    src: url(${InterRegular});
}

@font-face {
    font-family: 'Inter Medium';
    src: url(${InterMedium});
}

@font-face {
    font-family: 'Inter SemiBold';
    src: url(${InterSemiBold});
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter Regular';
    font-size: 20px;
}

a {
    text-decoration: none;
}

ul {
    list-style-type: none;
}
`

export default EstilosGlobais
