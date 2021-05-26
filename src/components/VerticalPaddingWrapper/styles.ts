import styled, { css } from 'styled-components'
import { Spacing } from 'types/style'

type WrapperProps = {
  padding?: Spacing
}

export const VerticalPaddingWrapper = styled.div<WrapperProps>`
  ${({ theme, padding = 'medium' }) => css`
    padding: ${theme.spacings[padding]} 0;
  `}
`
