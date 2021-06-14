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
                Plataforma Para Deficientes
              </Heading>

              <Paragraph fontSize="xxlarge">
                <br />
                Acessibilidade e inclusão com o conforto que você precisa
                <br />
                <br />
                <br />
                Atender á necessidade de garantir acessibilidade a todos os
                locais por pessoas portadoras de deficiências ou com mobilidade
                reduzida, suprindo assim de maneira prática e eficiente uma
                exigência social e legal. A plataforma para acessibilidades é
                contruida com tecnologia hidráulica, o que garante um
                deslocamento suave e preciso com baixo consumo de energia, uma
                vez que a bomba hidráulica de baixa potência consome energia
                apenas para subir, já a descida é realizada pela força da
                gravidade.
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
              src="/img/elevadores/image4.png"
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
