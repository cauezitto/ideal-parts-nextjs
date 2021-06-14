import VerticalPaddingWrapper from 'components/VerticalPaddingWrapper'
import HorizontalPaddingWrapper from 'components/HorizontalPaddingWrapper'
import Default from 'templates/Default'
import Row from 'components/Row'
import Column from 'components/Column'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import Button from 'components/Button'
import Link from 'components/Link'
import ContactForm from 'components/ContactForm'

const elevadores = () => {
  return (
    <Default>
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
                Elevador de Carga
              </Heading>

              <Paragraph fontSize="xxlarge">
                <br />
                Transporte de grandes cargas com total confiança
                <br />
                <br />
                <br />
                Elevador de carga utilizando em vários tipos de edifícios
                pricipalmente na indústria. São elevadores robustos com a
                finalidade especifica de transporte de carga. Existem projetos
                concebidos para uso misto - cargas e passageiros. O sistema de
                acionamento pode ser elétrico ou hidráulico, recomendando-se que
                um especialista indique a melhor opção após avaliar as condições
                da obra procurando o melhor custo benefício
              </Paragraph>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Link textDecoration="none" href="#contato">
                <a>
                  <Button fontSize="xlarge" radius={5}>
                    Orçar Agora
                  </Button>
                </a>
              </Link>
            </Column>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <img
              width={330}
              src="/img/elevadores/image2.png"
              alt="elevador de passageiros"
            />
          </Row>
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
      <a id="contato"></a>
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Heading role="h2" margin="50px 0">
            Faça Seu Orçamento
          </Heading>
          <ContactForm />
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
    </Default>
  )
}

export default elevadores
