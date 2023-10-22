import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
    }

    body{
        background: ${({ theme }) => theme['gray-900']};
        color:${({ theme }) => theme['gray-300']};
    }

    body, button, input, textarea{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`
