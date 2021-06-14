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

const Elevadores = () => {
  return (
    <Default>
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Row
            responsive
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <img
              width={300}
              src="/img/servicos/image1.png"
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
                Modernização Técnológica
              </Heading>

              <Paragraph fontSize="xxlarge">
                Peças e componentes antigos ficam cada vez mais difíceis e mais
                caros de serem consertados, além de gastarem mais energia do que
                poderiam. Faça um orçamento e compare com seus gastos no ultimo
                ano! Você vai ver que vale a pena. Fazemos a modernização total,
                parcial, estética, ou agregamos acessórios às suas instalações
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
                    Entre em Contato
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
                Manutenção Preventiva
              </Heading>

              <Paragraph fontSize="xxlarge">
                Não deixe para depois! Oferecemos um serviço de manutenção para
                você manter tudo funcionando da melhor forma e garantir a
                qualidade e a durabilidade do seu equipamento. Atendemos a todas
                as exigências previstas na legislação de transporte vertical:
                livro de ocorrência, laudo de inspeção anual e ART – Anotação de
                Responsabilidade Técnica CREA-BA.
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
                    Entre em Contato
                  </Button>
                </a>
              </Link>
            </Column>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            <img
              width={300}
              src="/img/servicos/image2.png"
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
              src="/img/servicos/image3.png"
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
                Manutenção Corretiva
              </Heading>

              <Paragraph fontSize="xxlarge">
                Em caso de emergência, estamos aqui para te ajudar!
                Disponibilizaremos um técnico exclusivamente para a sua
                instalação, possibilitando um resgate rápido de passageiros e
                correção eficiente do problema.
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
                    Entre em Contato
                  </Button>
                </a>
              </Link>
            </Column>
          </Row>
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
      <a id="contato"></a>
      <VerticalPaddingWrapper>
        <HorizontalPaddingWrapper>
          <Heading lineBottomWidth={100}>Faça um orçamento</Heading>
          <br />
          <br />

          <ContactForm />
        </HorizontalPaddingWrapper>
      </VerticalPaddingWrapper>
    </Default>
  )
}

export default Elevadores
