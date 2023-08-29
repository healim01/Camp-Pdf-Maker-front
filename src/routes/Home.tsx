import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Img src="https://cdn.pixabay.com/photo/2019/04/14/10/27/book-4126483_1280.jpg" />
        <TextOverlay> SW 중심대학 수료증 발급 </TextOverlay>
      </Container>
    </>
  );
}
