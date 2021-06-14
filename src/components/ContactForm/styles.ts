import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 15px;
    grid-template-areas:
      'nome nome nome nome nome'
      'cel cel email email email '
      'cep . . . .'
      'state state city city city'
      'neighborhood neighborhood street street number'
      'floors floors reference reference reference'
      'check1 check1 . check2 check2'
      'check3 check3 . . .'
      'brand brand . . .'
      'message message message message message'
      'submit . . . .';

    div input {
      width: 100%;
    }

    @media (max-width: 1024px) {
      width: 90%;
    }

    @media (max-width: 768px) {
      width: 100%;
      label {
        font-size: 1rem;
      }
    }

    @media (max-width: 425px) {
      display: flex;
      flex-direction: column;
    }

    .nome {
      grid-area: nome;
    }
    .phone {
      grid-area: cel;
    }
    .email {
      grid-area: email;
    }
    .cep {
      grid-area: cep;
    }
    .state {
      grid-area: state;
    }
    .city {
      grid-area: city;
    }
    .neighborhood {
      grid-area: neighborhood;
    }
    .street {
      grid-area: street;
    }
    .number {
      grid-area: number;
    }
    .floors {
      grid-area: floors;
    }
    .reference {
      grid-area: reference;
    }
    .box1 {
      grid-area: check1;
    }
    .box2 {
      grid-area: check2;
    }
    .box3 {
      grid-area: check3;
    }
    .brand {
      grid-area: brand;
    }
    .message {
      grid-area: message;
    }
    .submit {
      grid-area: submit;
    }

    .checkbox-wrapper {
      display: grid;
      grid-gap: 10px 0;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'title title'
        'type1 type2';

      strong {
        grid-area: title;
        font-weight: bold;
        color: #000000;
        text-align: center;
        letter-spacing: 0.18em;
      }
    }

    @media (max-width: ${theme.breakPoints.mobileL}) {
      display: flex;
      flex-direction: column;
    }
  `}
`

type CheckBoxProps = {
  gridArea?: string
}

export const CheckBox = styled.label<CheckBoxProps>`
  grid-area: ${({ gridArea = 'type1' }) => gridArea};
  font-weight: normal;
  text-indent: 5px;

  display: flex;

  align-items: center;
  justify-content: center;
  letter-spacing: 0.18em;

  input {
    margin: 0 5px;
    border-radius: 10px;
    border: 2px solid;
  }
`
