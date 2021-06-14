import { Align, JustifyContent } from 'types/style'
import * as S from './styles'

export type RowProps = {
  responsive?: boolean
  justifyContent?: JustifyContent
  alignItems?: Align
  children: React.ReactNode
  fullWidth?: boolean
}

const Row = (props: RowProps) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Row
