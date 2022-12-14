import styled from 'styled-components'

const FormContent = styled.div`
    position: relative;

    &::before {
        content: '${(p) => p.message}';
        box-sizing: border-box;
        background: ${(p) => (p.error ? '#F7E1E3' : '#cff2cd')};
        width: 85%;

        top: -70px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        border: 1px solid ${(p) => (p.error ? 'red' : 'green')};
        border-radius: 10px;

        padding: 10px;

        visibility: ${(p) => (p.active ? 'visible' : 'hidden')};
    }

    @media (min-width: 768px) {
        &::before {
            width: 66.6%;
        }
    }

    @media (min-width: 1024px) {
        &::before {
            max-width: 85%;
        }
    }
`

export default FormContent
