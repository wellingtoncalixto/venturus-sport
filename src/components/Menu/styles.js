import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  z-index: 1;
  position: absolute;
  margin-top: 170px;
  width: 200px;
  height: 250px;
  background: #fff;
  box-shadow: 1px 1px 10px 1px #c6c6c6;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  hr {
    color: #f3f3f3;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 20%;

  :hover {
    color: #3ac5a9;
    background: #f3f3f3;
  }
`;
