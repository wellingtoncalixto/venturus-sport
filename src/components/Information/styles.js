import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: center;
  align-items: center;

  .conteudo {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;
export const Why = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;
export const Saying = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;
export const Text = styled.h1`
  color: #3ac5a9;
  font-weight: lighter;
`;
export const Content = styled.p`
  width: 50%;
  margin-left: 10px;
  font-size: 15px;
`;
