import styled, { css } from 'styled-components'
import { ColumnProps } from '.'

export const Wrapper = styled.div<ColumnProps>`
  ${({ theme, alignItems = 'center', justifyContent }) => css`
    display: flex;
    flex-direction: column;
    align-items: ${alignItems};

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  `}
`
