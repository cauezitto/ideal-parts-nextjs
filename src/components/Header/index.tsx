import * as S from './styles'
import HorizontalPaddingWrapper from 'components/HorizontalPaddingWrapper'
import Link from 'components/Link'
import Row from 'components/Row'
import {
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiSmartphone,
  FiMenu
} from 'react-icons/fi'
import Column from 'components/Column'
import { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <S.Wrapper>
      <S.ContactContainer>
        <HorizontalPaddingWrapper>
          <Row justifyContent="space-between" fullWidth>
            <Row>
              <Link
                href=""
                textDecoration="none"
                color="white100"
                iconSize="xxlarge"
                iconColor="white100"
              >
                <FiTwitter />
              </Link>{' '}
              &nbsp; &nbsp; &nbsp;
              <Link
                href=""
                textDecoration="none"
                color="white100"
                iconSize="xxlarge"
                iconColor="white100"
              >
                <FiInstagram />
              </Link>{' '}
              &nbsp; &nbsp; &nbsp;
              <Link
                href=""
                textDecoration="none"
                color="white100"
                iconSize="xxlarge"
                iconColor="white100"
              >
                <FiFacebook />
              </Link>{' '}
              &nbsp; &nbsp; &nbsp;
            </Row>

            <Row>
              <FiSmartphone fontSize={20} color="fff" />
              &nbsp; &nbsp;
              <Column>
                <Link
                  textDecoration="none"
                  color="white100"
                  href="tel:71 9816-45390"
                >
                  (71) 9816-45390
                </Link>
                <Link
                  textDecoration="none"
                  color="white100"
                  href="tel:71 3375-1883"
                >
                  (71) 3375-1883
                </Link>
              </Column>
            </Row>
          </Row>
        </HorizontalPaddingWrapper>
      </S.ContactContainer>
      <HorizontalPaddingWrapper>
        <S.NavigationWrapper>
          <S.Logo src="/img/logo.svg" />

          <S.Nav>
            <ul>
              <li>
                <Link href="/" textDecoration="none" fontSize="xlarge">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servicos" textDecoration="none" fontSize="xlarge">
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/elevadores"
                  textDecoration="none"
                  fontSize="xlarge"
                >
                  Elevadores
                </Link>
              </li>
              <li>
                <Link href="/loja" textDecoration="none" fontSize="xlarge">
                  Peças
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/pedidos"
                  textDecoration="none"
                  fontSize="xlarge"
                >
                  Entrar
                </Link>
              </li>
            </ul>
          </S.Nav>

          <FiMenu className="menu-button" onClick={() => setShow(!show)} />
        </S.NavigationWrapper>

        <S.MobileMenu show={show}>
          <Column>
            <Link textDecoration="none" fontWeight="bold" href="/">
              Home
            </Link>
            &nbsp;
            <Link textDecoration="none" fontWeight="bold" href="/servicos">
              Serviços
            </Link>
            &nbsp;
            <Link textDecoration="none" fontWeight="bold" href="/elevadores">
              Elevadores
            </Link>
            &nbsp;
            <Link textDecoration="none" fontWeight="bold" href="/loja">
              Peças
            </Link>
            &nbsp;
            <Link
              textDecoration="none"
              fontWeight="bold"
              href="/dashboard/pedidos"
            >
              Entrar
            </Link>
            &nbsp;
          </Column>
        </S.MobileMenu>
      </HorizontalPaddingWrapper>
    </S.Wrapper>
  )
}

export default Header
