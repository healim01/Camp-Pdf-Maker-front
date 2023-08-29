import styled from 'styled-components';

const Div = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
`;

export default function Footer() {
  return (
    <Div>
      <p>Copyright &copy; 2023 WALAB Hyelim Choi. All rights reserved.</p>
    </Div>
  );
}
