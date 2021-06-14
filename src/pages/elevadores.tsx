import VerticalPaddingWrapper from 'components/VerticalPaddingWrapper'
import HorizontalPaddingWrapper from 'components/HorizontalPaddingWrapper'
import Default from 'templates/Default'
import Banner from 'components/Banner'
import Row from 'components/Row'
import Column from 'components/Column'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'
import Link from 'components/Link'

const Elevadores = () => {
  return (
    <Default>
      <Banner title="ELEVADORES" img="/img/elevadores/banner.png" />
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Row
            responsive
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <img
              width={300}
              src="/img/elevadores/image1.png"
              alt="elevador de passageiros"
            />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <Column justifyContent="flex-start" alignItems="flex-start">
              <Heading
                textAlign="left"
                justify="flex-end"
                fontSize="max"
                color="black"
                lineBottom={false}
                role="h2"
              >
                Elevadores de Passageiros
              </Heading>

              <Paragraph fontSize="xxlarge">
                A Ideal Parts comercializa elevadores com alta qualidade e
                segurança para você e seus clientes! Acabamentos personalzados
                em granito e aço inox para trazer estilo durabilidade à sua
                instalação com baixo consumo de energia.
              </Paragraph>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Link textDecoration="none" href="/elevadores/passageiros">
                <a>
                  <Button fontSize="xlarge" radius={5}>
                    Saiba Mais
                  </Button>
                </a>
              </Link>
            </Column>
          </Row>
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Row
            responsive
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Column justifyContent="flex-start" alignItems="flex-start">
              <Heading
                textAlign="left"
                justify="flex-end"
                fontSize="max"
                color="black"
                lineBottom={false}
                role="h2"
              >
                Elevadores de Carga
              </Heading>

              <Paragraph fontSize="xxlarge">
                A Ideal Parts comercializa elevadores com alta qualidade e
                segurança para você e seus clientes! Acabamentos personalzados
                em granito e aço inox para trazer estilo durabilidade à sua
                instalação com baixo consumo de energia.
              </Paragraph>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Link textDecoration="none" href="/elevadores/carga">
                <a>
                  <Button fontSize="xlarge" radius={5}>
                    Saiba Mais
                  </Button>
                </a>
              </Link>
            </Column>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <img
              width={300}
              src="/img/elevadores/image2.png"
              alt="elevador de passageiros"
            />
          </Row>
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Row
            responsive
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <img
              width={300}
              src="/img/elevadores/image3.png"
              alt="elevador de passageiros"
            />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <Column justifyContent="flex-start" alignItems="flex-start">
              <Heading
                textAlign="left"
                justify="flex-end"
                fontSize="max"
                color="black"
                lineBottom={false}
                role="h2"
              >
                Elevadores Monta Pratos
              </Heading>

              <Paragraph fontSize="xxlarge">
                Não deixe seus clientes esperando! Sistema automático com
                controle preciso de nível para transporte rápido e eficiente dos
                alimentos e facilidade na hora da limpeza.
              </Paragraph>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Link textDecoration="none" href="/elevadores/pratos">
                <a>
                  <Button fontSize="xlarge" radius={5}>
                    Saiba Mais
                  </Button>
                </a>
              </Link>
            </Column>
          </Row>
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Row
            responsive
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Column justifyContent="flex-start" alignItems="flex-start">
              <Heading
                textAlign="left"
                justify="flex-end"
                fontSize="max"
                color="black"
                lineBottom={false}
                role="h2"
              >
                Plataforma para Deficientes
              </Heading>

              <Paragraph fontSize="xxlarge">
                Acessibilidade e inclusão para todos! Cabine espaçosa e
                confortável com uso intuitivo para garantirmos a mobilidade e a
                segurança de todos os seus clientes e visitantes.
              </Paragraph>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Link textDecoration="none" href="/elevadores/plataforma">
                <a>
                  <Button fontSize="xlarge" radius={5}>
                    Saiba Mais
                  </Button>
                </a>
              </Link>
            </Column>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <img
              width={300}
              src="/img/elevadores/image4.png"
              alt="elevador de passageiros"
            />
          </Row>
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
    </Default>
  )
}

export default Elevadores
