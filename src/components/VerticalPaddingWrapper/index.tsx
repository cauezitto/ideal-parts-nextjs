import { ReactNode } from 'react'
import { Spacing } from 'types/style'
import * as S from './styles'

type VerticalPaddingProps = {
  padding?: Spacing
  children: ReactNode
}
const VerticalPaddingWrapper = (props: VerticalPaddingProps) => (
  <S.VerticalPaddingWrapper {...props}>
    {props.children}
  </S.VerticalPaddingWrapper>
)

export default VerticalPaddingWrapper
