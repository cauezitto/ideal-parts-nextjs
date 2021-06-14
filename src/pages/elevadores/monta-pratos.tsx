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
                Elevador de Monta Pratos
              </Heading>

              <Paragraph fontSize="xxlarge">
                <br />
                Agilidade no transporte, facilidade na limpeza
                <br />
                <br />
                <br />
                Os elevadores Monta Pratos foram projetados para atender o
                transporte de pequenas cargas em restaurantes laboratórios,
                bancos, residências de alto padrão, entre outros. Para o
                transporte de cargas que variam de 50 a 300 kg, os elevadores
                Monta Pratos podem ser confeccionados em aço inox escovado, aço
                carbono pintado.
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
              src="/img/elevadores/image3.png"
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
