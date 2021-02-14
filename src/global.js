import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center; 
        background: ${({ theme }) => theme.body};
        font-family: 'Poppins', sans-serif;   
    }
    .holder{
        background: ${({ theme }) => theme.background};
        padding: 0.8rem 2rem;
        width: 300px;
        margin: 8rem 0 0 0;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
    }
    
    .holder h1{
        color: ${({ theme }) => theme.text};
        font-family: 'Poppins', sans-serif; 
        text-align: center;
    }
    .holder-header{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column-reverse;
        position: relative;
    }
    .holder-header h2{
        color: ${({ theme }) => theme.primaryText};
        font-weight: 500;
        text-align: center;
    }
    .holder-header button{
        outline: none;
        border: none;
        position: absolute;
        top: -43%;
        left: 43%;
        background: ${({ theme }) => theme.buttonBg};
        border: 2px solid ${({ theme }) => theme.toggleBorder};
        width: 40px;
        height: 40px;
        border-radius: 2rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.buttonText};
        cursor: pointer;
    }
    input.form-control{
        outline: none;
        border: none;
        padding: 0.6rem 0.5rem;
        background: ${({ theme }) => theme.body};
        border-radius: 0.2rem 0 0 0.2rem ;
        color: ${({ theme }) => theme.text};
    }
    input[type="text"]::placeholder{
        color: ${({ theme }) => theme.text};
    }
    input::-webkit-input-placeholder{
        color: ${({ theme }) => theme.text};
    }
    button.form-submit{
        outline: none;
        border: none;
        padding: 0.3rem;
        background: ${({ theme }) => theme.buttonSubmit};
        cursor: pointer;
        color: whitesmoke;
        border-radius: 0 0.3rem 0.3rem 0 ;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-content: center;
    }
`;
