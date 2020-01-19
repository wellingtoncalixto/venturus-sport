import React from 'react';

import { Container, List, Item } from './styles';

export default function Menu(props) {
  function closeMenu() {
    props.close(false);
  }
  return (
    <Container open={props.open}>
      <List onClick={closeMenu}>
        <Item>Friend List</Item>
        <Item>Saved Items</Item>
        <Item>Notifications</Item>
        <Item>User Preferences</Item>
        <hr />
        <Item>Log Out</Item>
      </List>
    </Container>
  );
}
