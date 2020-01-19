import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPuzzlePiece,
  faTrophy,
  faMapSigns,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Sport, Mode, Route, Icon, Text } from './styles';

export default function Activities(props) {
  return (
    <Container>
      <Sport>
        <Icon>
          <FontAwesomeIcon icon={faPuzzlePiece} color="#3AC5A9" size="4x" />
        </Icon>
        <Text>
          <span>Sport Type</span>
          <h1>{props.sport ? props.sport : 'Cycling'}</h1>
        </Text>
      </Sport>
      <Mode>
        <Icon>
          <FontAwesomeIcon icon={faTrophy} color="#3AC5A9" size="4x" />
        </Icon>
        <Text>
          <span>Mode</span>
          <h1>{props.mode ? props.mode : 'Advenced'}</h1>
        </Text>
      </Mode>
      <Route>
        <Icon>
          <FontAwesomeIcon icon={faMapSigns} color="#3AC5A9" size="4x" />
        </Icon>
        <Text>
          <span>Route</span>
          <h1>{props.route ? props.route : '30 Miles'}</h1>
        </Text>
      </Route>
    </Container>
  );
}
