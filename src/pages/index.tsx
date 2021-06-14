import Default from 'templates/Default'
import HorizontalPaddingWrapper from 'components/HorizontalPaddingWrapper'
import VerticalPaddingWrapper from 'components/VerticalPaddingWrapper'
import Heading from 'components/Heading'
import ContactForm from 'components/ContactForm'
import Contact from 'components/Contact'
import Paragraph from 'components/Paragraph'
import Row from 'components/Row'
import Button from 'components/Button'
import Link from 'components/Link'
import { IoIosArrowForward } from 'react-icons/io'

export default function Home() {
  return (
    <Default>
      <HorizontalPaddingWrapper>
        <VerticalPaddingWrapper>
          <Heading lineBottomWidth={100}>Faça um orçamento</Heading>

          <VerticalPaddingWrapper>
            <ContactForm />
          </VerticalPaddingWrapper>

          <VerticalPaddingWrapper>
            <Contact />
          </VerticalPaddingWrapper>
          <VerticalPaddingWrapper>
            <Heading role="h2" lineBottom={false} fontSize="xxxlarge">
              Ideal é a solução!
            </Heading>
            <Paragraph fontSize="xlarge" margin="25px 0">
              Buscamos sempre oferecer as melhores soluções aos nossos clientes!
              Aqui você encontra todas as <b>peças</b> para o seu{' '}
              <b>elevador</b>, ou se quiser pode montar ele todinho com a gente!
              Compre agora e garanta sua instalação com garantia de 1 ano! Com
              nossos serviços de manutenção e supervisão <b>FULL-TIME</b> você
              deixa assegurada a estabilidade do seu equipamento e ainda ganha
              descontos na sua compra. Conheça nossas principais soluções:
            </Paragraph>
          </VerticalPaddingWrapper>

          <VerticalPaddingWrapper>
            <VerticalPaddingWrapper padding="xsmall">
              <Link
                href="/"
                fontWeight="bold"
                textDecoration="none"
                iconColor="primaryRed"
              >
                <a>
                  {' '}
                  <IoIosArrowForward /> Elevador de Passageiros
                </a>
              </Link>
            </VerticalPaddingWrapper>

            <VerticalPaddingWrapper padding="xsmall">
              <Link
                href="/"
                fontWeight="bold"
                textDecoration="none"
                iconColor="primaryRed"
              >
                <a>
                  {' '}
                  <IoIosArrowForward /> Elevador de Carga
                </a>
              </Link>
            </VerticalPaddingWrapper>

            <VerticalPaddingWrapper padding="xsmall">
              <Link
                href="/"
                fontWeight="bold"
                textDecoration="none"
                iconColor="primaryRed"
              >
                <a>
                  {' '}
                  <IoIosArrowForward /> Elevador Monta Pratos
                </a>
              </Link>
            </VerticalPaddingWrapper>

            <VerticalPaddingWrapper padding="xsmall">
              <Link
                href="/"
                fontWeight="bold"
                textDecoration="none"
                iconColor="primaryRed"
              >
                <a>
                  {' '}
                  <IoIosArrowForward /> Plataforma para Deficientes
                </a>
              </Link>
            </VerticalPaddingWrapper>
          </VerticalPaddingWrapper>

          <VerticalPaddingWrapper>
            <Row justifyContent="center">
              <Button fontSize="xlarge" radius={6}>
                Saiba Mais
              </Button>
            </Row>
          </VerticalPaddingWrapper>
        </VerticalPaddingWrapper>
      </HorizontalPaddingWrapper>
    </Default>
  )
}
