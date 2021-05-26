import PaddingWrapper from 'components/HorizontalPaddingWrapper'
import Heading from 'components/Heading'
import * as S from './styles'
import Input from 'components/Input'
import Button from 'components/Button'
import HorizontalPaddingWrapper from 'components/VerticalPaddingWrapper'
import { FiPhone, FiMail, FiFacebook } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
// import CopyAndPayment from 'components/CopyAndPayment'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <PaddingWrapper>
      <HorizontalPaddingWrapper padding="large">
        <S.NavsContainer>
          <S.Nav>
            <Heading
              role="h3"
              margin="0 0 30px 0"
              lineBottom={false}
              color="white100"
            >
              INSTITUCIONAL
            </Heading>

            <Link href={`/loja?categorias`}>
              <S.NavigationLink>Home</S.NavigationLink>
            </Link>

            <Link href="/elevadores">
              <S.NavigationLink>Elevadores</S.NavigationLink>
            </Link>

            <Link href="/servicos">
              <S.NavigationLink>Serviços</S.NavigationLink>
            </Link>
          </S.Nav>

          <S.Nav>
            <Heading
              role="h3"
              lineBottom={false}
              color="white100"
              fontWeight="semiBold"
              margin="0 0 30px 0"
            >
              MINHA CONTA
            </Heading>

            <Link href="/cadastro">
              <S.NavigationLink>Criar conta</S.NavigationLink>
            </Link>

            <Link href="/dashboard/dados-pessoais">
              <S.NavigationLink>Minha conta</S.NavigationLink>
            </Link>
          </S.Nav>

          <S.Nav>
            <Heading
              role="h3"
              lineBottom={false}
              color="white100"
              fontWeight="semiBold"
              margin="0 0 30px 0"
            >
              LOJA
            </Heading>

            <Link href="/sobre">
              <S.NavigationLink>Sobre Nós</S.NavigationLink>
            </Link>

            <Link href="/contato">
              <S.NavigationLink>Contato</S.NavigationLink>
            </Link>

            <Link href="/regulamentos">
              <S.NavigationLink>Troca e Devolução</S.NavigationLink>
            </Link>
          </S.Nav>

          <S.Nav>
            <Heading
              role="h3"
              lineBottom={false}
              color="white100"
              fontWeight="semiBold"
              margin="0 0 30px 0"
            >
              FALE CONOSCO
            </Heading>

            <S.SocialMediaContainer>
              <div className="social-media">
                <S.NavigationLink href="https://www.facebook.com/jgemporiodamalha">
                  <FiFacebook size={20} />
                </S.NavigationLink>
              </div>

              <div className="social-media">
                <S.NavigationLink href="https://www.instagram.com/jeffersonegisele/">
                  <FaInstagram size={20} />
                </S.NavigationLink>
              </div>
            </S.SocialMediaContainer>

            <S.NavigationLink href="tel:71 8164-5390">
              {' '}
              <FiPhone /> &nbsp; 71 8164-5390
            </S.NavigationLink>

            <S.NavigationLink href="mailto:jota@idealparts.com.br">
              {' '}
              <FiMail /> &nbsp; jota@idealparts.com.br
            </S.NavigationLink>
          </S.Nav>
        </S.NavsContainer>
      </HorizontalPaddingWrapper>
    </PaddingWrapper>
    {/* <CopyAndPayment /> */}
  </S.Wrapper>
)

export default Footer
