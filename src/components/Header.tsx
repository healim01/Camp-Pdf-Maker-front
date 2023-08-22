import styled from 'styled-components';

const Container = styled.header`
  height: 120px;
  background-color: lightblue;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  /* width: 75px; */
  height: 75px;
  object-fit: cover;
`;

const MENU = styled.div`
  display: flex;
  gap: 20px;
`;
const Item = styled.div`
  width: 150px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <>
      <Container>
        <Logo src="https://csee.handong.edu/wp-content/uploads/2018/02/csee-logo-symbol-e1518540168998.png" />
        <div />
        <MENU>
          <Item> Camp 모두 보기 </Item>
          <Item> Login </Item>
        </MENU>
      </Container>
    </>
  );
}
