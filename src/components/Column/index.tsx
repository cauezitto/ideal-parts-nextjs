import { Align, JustifyContent } from 'types/style'
import * as S from './styles'

export type ColumnProps = {
  children: React.ReactNode
  justifyContent?: JustifyContent
  alignItems?: Align
}

const Column = (props: ColumnProps) => (
  <S.Wrapper {...props}>{props.children}</S.Wrapper>
)

export default Column
