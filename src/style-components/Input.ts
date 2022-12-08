import styled from 'styled-components'

export const Wrapper = styled.div `
color: #fff;
width: 80%;
margin-left: auto;
margin-right: auto;
border: 1px solid #e5e7eb;
padding: 1rem;
`;

export const Title = styled.h1`
font-size: 1.5rem;
line-height: 2rem;
font-weight: 700;
color: #000;
margin-bottom: 1.25rem;
background-color: rgb(241 245 249);
width: 100%;
padding: 1rem;
`

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1rem;
border-radius: 0.375rem;
background-color: rgb(255 255 255);
border: 1px solid #e5e7eb;
width: 100%;
`

export const Input = styled.input`
background-color: transparent;
width: 100%;
outline: 2px solid transparent;
outline-offset: 2px;
padding-left: 0.75rem;
color: #000;
`

export const Btn = styled.button`
background-color: rgb(14 165 233);
padding: 0.75rem;
border-radius: 0.375rem;
transition: background-color 0.3s ease-in-out;
&:hover {
    background-color: rgb(239 68 68);
}
`

export const Record = styled.div`
border: 1px solid #e5e7eb;
width: 100%;
`