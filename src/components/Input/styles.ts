import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

interface StyleInputProps extends InputProps {
  theme: DefaultTheme
}

const style = ({
  theme,
  borderColor = 'gray100',
  width,
  height,
  fontSize = 'medium',
  font = 'roboto',
  fill = 'white100',
  borderWidth,
  radius,
  margin,
  textArea
}: StyleInputProps) => css`
  padding: ${theme.spacings.xxsmall};
  border-color: ${theme.colors[borderColor]};
  outline: none;
  border-style: solid;
  font-size: ${theme.font.sizes[fontSize]};
  font-family: ${theme.font.family[font]};
  ${margin &&
  css`
    margin: ${margin};
  `}
  ${radius &&
  css`
    border-radius: ${radius}px;
  `}
  ${borderWidth &&
  css`
    border-width: ${borderWidth}px;
  `}
  ${fill &&
  css`
    background-color: ${theme.colors[fill]};
  `}
  ${height &&
  css`
    height: ${height}px;
  `}
  ${width &&
  css`
    width: ${width}px;
  `}

  ${textArea &&
  css`
    column-count: 15;
  `}
`

export const Input = styled.input<InputProps>`
  ${(props) => style(props)}
`

export const TextArea = styled.textarea<InputProps>`
  ${(props) => style(props)}
`
