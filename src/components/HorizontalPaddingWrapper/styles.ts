import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 13%;

    @media (max-width: ${theme.breakPoints.tablet}) {
      padding: 0 5%;
    }
  `}
`
