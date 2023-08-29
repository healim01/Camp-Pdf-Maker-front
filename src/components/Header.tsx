import styled from 'styled-components';
import GoogleButton from '../auth/GoogleButton';
import { useRecoilValue } from 'recoil';
import { IsLoginState } from '../store/atom';
import logo from '../imgs/Logo.png';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import theme from '../theme';

const Div = styled.header`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid ${theme.palette.color.main};
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
  /* height: 40px; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px;

  &:hover {
    border: 3px solid ${theme.palette.color.mint};
    border-radius: 50px;
    padding: 10px 30px;
  }
`;

export default function Header() {
  const isUserLoggedIn = useRecoilValue(IsLoginState);
  return (
    <>
      <Div>
        <Link to="/main">
          <Logo src={logo} />
        </Link>
        <div />
        <MENU>
          {isUserLoggedIn ? (
            <Link to="/mypage">
              <Item>
                <HiHome /> MY PAGE
              </Item>
            </Link>
          ) : (
            <GoogleButton />
          )}
        </MENU>
      </Div>
    </>
  );
}
