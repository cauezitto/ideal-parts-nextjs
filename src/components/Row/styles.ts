import styled, { css } from 'styled-components'
import { RowProps } from '.'

export const Wrapper = styled.div<RowProps>`
  ${({
    theme,
    justifyContent = 'space-between',
    fullWidth,
    alignItems = 'center',
    responsive
  }) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};

    ${fullWidth &&
    css`
      width: 100%;
    `}
    ${responsive &&
    css`
      @media (max-width: ${theme.breakPoints.mobileL}) {
        flex-direction: column;
      }
    `}
  `}
`
