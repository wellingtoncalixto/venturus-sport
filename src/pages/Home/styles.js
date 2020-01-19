import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Page = styled.div`
  display: flex;
  padding: 60px;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: lighter;
  }

  hr {
    width: 70%;
    height: 1px;
    margin-left: 50px;
  }
`;

export const Formulari = styled(Form)`
  margin-left: 50px;
  width: 20%;
  height: 35px;
  border: 1px solid #c6c6c6;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
`;

export const InputText = styled(Input)`
  width: 100%;
  height: 100%;
  border: none;
  margin-left: 7px;
`;

export const Table = styled.table`
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  margin-bottom: 50px;

  th,
  td {
    text-align: start;
    padding-left: 30px;
  }
  tr:nth-child(even) {
    background: #f8f8f8;
  }
`;

export const TableBody = styled.tbody`
  tr {
    height: 50px;
    padding-left: 60px;
    padding-right: 60px;
    width: 100%;
  }
  td:nth-last-child(2) {
    width: 15px;
  }
  td:nth-last-child() {
    width: 15px;
  }
  tr:hover {
    background: ${darken(0.05, '#f8f8f8')};
  }
`;
