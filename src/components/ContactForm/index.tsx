import Input from 'components/Input'
import Label from 'components/Label'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { cepMask, telMask } from 'utils/masks'
import Button from 'components/Button'

const ContactForm = () => {
  const [showAddress, setShowAddress] = useState(false)

  const [nome, setNome] = useState('')
  const [phone, setPhone] = useState('')
  const [cep, setCep] = useState('')
  const [email, setEmail] = useState('')
  const [neighborhood, setNeightborhood] = useState('')
  const [state, setState] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [reference, setReference] = useState('')
  const [floors, setFloors] = useState('')
  const [number, setNumber] = useState('')
  const [brand, setBrand] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (cep.length === 10) {
      setShowAddress(true)
    }
  }, [cep])

  return (
    <S.Wrapper>
      <div className="nome">
        <Label font="ubuntu" fontWeight="bold">
          Nome *
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Label>
      </div>
      <div className="phone">
        <Label font="ubuntu" fontWeight="bold">
          Phone *
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={phone}
            onChange={(e) => setPhone(telMask(e.target.value))}
          />
        </Label>
      </div>
      <div className="email">
        <Label font="ubuntu" fontWeight="bold">
          Email *
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
      </div>
      <div className="cep">
        <Label font="ubuntu" fontWeight="bold">
          CEP *
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={cep}
            onChange={(e) => setCep(cepMask(e.target.value))}
          />
        </Label>
      </div>
      {showAddress && (
        <>
          <div className="state">
            <Label font="ubuntu" fontWeight="bold">
              UF
              <Input
                fill="gray50"
                borderColor="gray100"
                radius={6}
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Label>
          </div>
          <div className="city">
            <Label font="ubuntu" fontWeight="bold">
              Cidade
              <Input
                fill="gray50"
                borderColor="gray100"
                radius={6}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Label>
          </div>
          <div className="neighborhood">
            <Label font="ubuntu" fontWeight="bold">
              Bairro
              <Input
                fill="gray50"
                borderColor="gray100"
                radius={6}
                value={neighborhood}
                onChange={(e) => setNeightborhood(e.target.value)}
              />
            </Label>
          </div>
          <div className="street">
            <Label font="ubuntu" fontWeight="bold">
              Rua
              <Input
                fill="gray50"
                borderColor="gray100"
                radius={6}
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Label>
          </div>

          <div className="number">
            <Label font="ubuntu" fontWeight="bold">
              N°
              <Input
                fill="gray50"
                borderColor="gray100"
                radius={6}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Label>
          </div>
        </>
      )}
      <div className="floors">
        <Label font="ubuntu" fontWeight="bold">
          Andares
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
          />
        </Label>
      </div>
      <div className="reference">
        <Label font="ubuntu" fontWeight="bold">
          Ponto de referencia
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </Label>
      </div>

      <div className="box1 checkbox-wrapper">
        <strong>Qual manutenção deseja orçar?</strong>

        <S.CheckBox gridArea="type1">
          <input type="checkbox" name="preventive" />
          Preventiva
        </S.CheckBox>

        <S.CheckBox gridArea="type2">
          <input type="checkbox" name="corretive" />
          Corretiva
        </S.CheckBox>
      </div>

      <div className="box2 checkbox-wrapper">
        <strong>Tipo de equipamento</strong>

        <S.CheckBox gridArea="type1">
          <input type="checkbox" name="elevator" />
          Elevador
        </S.CheckBox>

        <S.CheckBox gridArea="type2">
          <input type="checkbox" name="ladder" />
          Escada
        </S.CheckBox>
      </div>

      <div className="box3 checkbox-wrapper">
        <strong>Modernização tecnológica?</strong>

        <S.CheckBox gridArea="type1">
          <input type="checkbox" name="elevator" />
          Sim
        </S.CheckBox>

        <S.CheckBox gridArea="type2">
          <input type="checkbox" name="ladder" />
          Não
        </S.CheckBox>
      </div>
      <div className="brand">
        <Label font="ubuntu" fontWeight="bold">
          Marca do equipamento
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Label>
      </div>
      <div className="message">
        <Label font="ubuntu" fontWeight="bold">
          Mensagem
          <Input
            fill="gray50"
            borderColor="gray100"
            radius={6}
            textArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={8}
          />
        </Label>
      </div>

      <div className="submit">
        <Button radius={5} fontSize="large">
          Enviar
        </Button>
      </div>
    </S.Wrapper>
  )
}

export default ContactForm
