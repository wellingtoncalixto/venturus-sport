import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Left, Rigth, ContainerIcon, Avatar, Nav } from './styles';
import Menu from '../Menu';

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [iniciais, setInicial] = useState();
  function openMenu() {
    setOpen(true);
  }

  useEffect(() => {
    function User() {
      fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(response => response.json())
        .then(data => {
          setUser(data);
        });
    }
    User();
  }, []);

  useEffect(() => {
    const nomeCompleto = String(user.name);
    const nome = nomeCompleto.split(' ');
    const first = String(nome[0]);
    const second = String(nome[1]);
    const inicial1 = first.substr(0, 1);
    const inicial2 = second.substr(0, 1);
    setInicial(inicial1 + inicial2);
  }, [user]);

  return (
    <Container>
      <Left>
        <ContainerIcon>
          <div>
            <FontAwesomeIcon icon={faQuestion} color="#fff" size="xs" />
          </div>
        </ContainerIcon>
        <span>Venturus Sport</span>
      </Left>
      <Rigth>
        {props.avatar ? (
          <Avatar src={props.avatar} />
        ) : (
          <div className="noAvatar">
            <span>{iniciais}</span>
          </div>
        )}

        <Nav type="button" onClick={openMenu}>
          <span>{user.name}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </Nav>
        <Menu open={open} close={setOpen} />
      </Rigth>
    </Container>
  );
}
