import React from 'react';

import { Check } from '@rocketseat/unform';
import * as Yup from 'yup';
import {
  Container,
  FormData,
  InputText,
  Group,
  Left,
  Rigth,
  Cabecalho,
  Text,
  Buttons,
} from './styles';

import Header from '../../components/Header';
import Information from '../../components/Information';

const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatorio'),
  name: Yup.string().required(' nome é obrigatorio'),
  email: Yup.string()
    .email()
    .required('email é obrigatorio'),
  grup: Yup.string().required('obrigatorio'),
});

export default function Register() {
  function handleSubmit() {
    alert('cadastro realizado');
  }
  return (
    <Container>
      <Header />
      <Cabecalho>
        <Text>Register </Text>
        <hr />
      </Cabecalho>
      <Information />
      <hr />
      <FormData schema={schema} onSubmit={handleSubmit}>
        <Left>
          <div className="input">
            <InputText name="username" label="Username" />
          </div>
          <div className="input">
            <InputText name="name" label="Name" />
          </div>
          <div className="input">
            <InputText name="email" label="E-mail" />
          </div>
          <Buttons>
            <button type="submit" className="enviar">
              Save
            </button>
            <button type="button" className="descartar">
              Discard
            </button>
          </Buttons>
        </Left>
        <Rigth>
          <div className="city">
            <span>(optional)</span>
            <InputText name="city" label="City" />
          </div>
          <div className="group">
            <label>Ride in Group</label>
            <div className="choice">
              <Group
                name="grup"
                options={[
                  { value: 'Always', label: 'Always' },
                  { value: 'Sometimes', label: 'Sometimes' },
                  { value: 'Never', label: 'Never' },
                ]}
              />
            </div>
          </div>
          <div className="check">
            <label>Days of Week</label>
            <div className="checked">
              <Check name="Sun" label="Sun" />
              <Check name="Mon" label="Mon" />
              <Check name="Tue" label="Tue" />
              <Check name="Wed" label="Wed" />
              <Check name="The" label="The" />
              <Check name="Fri" label="Fri" />
              <Check name="Sat" label="Sat" />
            </div>
          </div>
        </Rigth>
      </FormData>
    </Container>
  );
}
