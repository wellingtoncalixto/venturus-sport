import styled from 'styled-components';
import { Form, Input, Choice } from '@rocketseat/unform';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    margin-bottom: 10px;
    width: 75%;
    margin-left: 9%;
    border: 1px solid #c6c6c6;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  padding-left: 60px;
  padding-right: 60px;
  align-items: center;

  hr {
    width: 95%;
    margin-left: 5%;
  }
`;

export const Text = styled.h1`
  font-size: 50px;
  font-weight: lighter;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 400px;
  justify-content: space-between;

  label {
    margin-bottom: 0;
  }
  span {
    margin-top: -10;
    color: red;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
`;
export const Rigth = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 290px;
  justify-content: space-between;

  .city {
    display: flex;
    flex-direction: column;

    span {
      text-align: end;
      margin-bottom: -10px;
      margin-right: 150px;
      font-size: 10px;
      color: #c6c6c6;
    }
  }
  .group {
    display: flex;
    flex-direction: column;

    .choice {
      display: flex;
      align-items: center;
      margin-top: 10px;

      input {
        margin: 0;
        height: 25px;
        width: 25px;
      }

      label {
        margin-right: 5px;
        margin-left: 5px;
      }

      span {
        margin-top: 25px;
        position: absolute;
        color: red;
      }
    }
  }

  .check {
    display: flex;
    flex-direction: column;

    .checked {
      display: flex;
      align-items: center;
      margin-top: 10px;

      input {
        margin: 0;
        height: 25px;
        width: 25px;
      }

      label {
        margin-right: 5px;
        margin-left: 5px;
        font-size: 20px;
      }
    }
  }
`;
export const FormData = styled(Form)`
  display: flex;
  width: 100%;

  padding-left: 200px;
  padding-right: 200px;

  label {
    font-size: 15px;
  }
`;
export const InputText = styled(Input)`
  height: 35px;

  width: 80%;
  border-radius: 5px;
  border: 1px solid #c6c6c6;
  padding: 5px;

  :focus {
    border: 1px solid #1abc9c;
  }
`;
export const Group = styled(Choice)`
  margin-top: 15px;
  color: red;
  display: flex;
`;

export const Buttons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: flex-start;

  .enviar {
    width: 80px;
    height: 40px;
    background: #1abc9c;
    border: 1px solid #1abc9c;
    border-radius: 5px;
    color: #fff;
  }

  .descartar {
    margin-left: 10px;
    width: 80px;
    height: 40px;
    background: #e3e3e3;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    color: #666e;
  }
`;
