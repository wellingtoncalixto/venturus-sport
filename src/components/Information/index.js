import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLifeRing,
  faHeartbeat,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Help, Why, Saying, Text, Content } from './styles';

export default function Information() {
  return (
    <Container>
      <Help>
        <Text>Need help?</Text>
        <div className="conteudo">
          <FontAwesomeIcon icon={faLifeRing} size="5x" color="#3AC5A9" />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Content>
        </div>
      </Help>
      <Why>
        <Text>Why register?</Text>
        <div className="conteudo">
          <FontAwesomeIcon icon={faHeartbeat} size="5x" color="#3AC5A9" />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Content>
        </div>
      </Why>
      <Saying>
        <Text>What people are saying...</Text>
        <div className="conteudo">
          <FontAwesomeIcon icon={faSmile} size="5x" color="#3AC5A9" />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Content>
        </div>
      </Saying>
    </Container>
  );
}
