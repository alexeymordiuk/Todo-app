import styled from 'styled-components'
import { VscTasklist } from "react-icons/vsc";
import { BsTrash } from "react-icons/bs";

export const Wrraper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem;
width: 100%;
color: #000;
border: 1px solid #e5e7eb;

@media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
}
`;

export const Target = styled.div`
display: flex;
align-items: center;
gap: 0 0.75rem;

@media (max-width: 550px) {
    margin-bottom: 10px;
}
`

export const Input = styled.input`
background: none;
width: 200px;
`

export const BtnGreen = styled.button`
background-color: rgb(34 197 94);
padding: 0.5rem;
border-radius: 0.375rem;
`

export const BtnRed = styled(BtnGreen)`
background-color: rgb(220 38 38);
`;

export const IconList = styled(VscTasklist)`
color: #fff;
transition: color 0.3s ease-in-out;
&:hover {
    color: rgb(59 130 246);
}
`

export const IconTrash = styled(BsTrash)`
color: #fff;
transition: color 0.3s ease-in-out;
&:hover {
    color: rgb(59 130 246);
}
`


