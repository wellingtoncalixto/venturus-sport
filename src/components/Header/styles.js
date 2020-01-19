import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  width: 100%;
  height: 150px;
`;

export const Left = styled.div`
  padding: 60px;
  width: 50%;
  display: flex;
  align-items: center;
  font-size: 35px;

  span {
    margin-left: 15px;
  }
`;

export const ContainerIcon = styled.div`
  width: 70px;
  height: 70px;
  background: #1abc9c;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  div {
    border: 5px solid #fff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

export const Rigth = styled.div`
  padding: 30px;
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;

  .noAvatar {
    height: 50px;
    width: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Avatar = styled.image`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const Nav = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;

  svg {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }
`;
