import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Page,
  Formulari,
  InputText,
  Table,
  TableBody,
} from './styles';
import Header from '../../components/Header';
import Activities from '../../components/ Activities';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function Users() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
          setUsers(data);
        });
    }
    Users();
  }, []);

  return (
    <Container>
      <Header />
      <Activities />
      <Page>
        <h1>Users</h1>
        <hr />
        <Formulari>
          <FontAwesomeIcon icon={faSearch} />
          <InputText name="filter" placeholder="Filter table Content" />
        </Formulari>
      </Page>

      <Table name="table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>City</th>
            <th>Ride in group</th>
            <th>Day of the week</th>
            <th>Posts</th>
            <th>Albuns</th>
            <th>Photos</th>
            <th />
          </tr>
        </thead>
        <TableBody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>
                <font color="#21C9CE">{user.email}</font>
              </td>
              <td>
                <font color="#21C9CE">{user.address.city}</font>
              </td>
              <td>Ride in group</td>
              <td>Day of the week</td>
              <td>post</td>
              <td>albums</td>
              <td>Photos</td>
              {/* {openDelete ? (
                <td>
                  <FontAwesomeIcon icon={faTrash} />{' '}
                </td>
              ) : (
                <td />
              )} */}
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
