import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: lightyellow;
  position: absolute;
  bottom: 0;
`;

export default function Footer() {
  return (
    <Container>
      <p>Copyright &copy; 2023 WALAB Hyelim Choi. All rights reserved.</p>
    </Container>
  );
}
