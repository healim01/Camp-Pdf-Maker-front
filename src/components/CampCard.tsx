import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

interface IcampInfo {
  campID: number;
  campName: string;
  campImg: string;
  campDesc: string;
  campProf: string;
}

const Card = styled.div`
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background-color: red; */
  position: relative;
`;

const CampImg = styled.img`
  width: 300px;
  height: 160px;
  border-radius: 5px;
  object-fit: cover;
`;
const CampName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const CampDesc = styled.div`
  font-size: 14px;
  color: #666666;
`;

const Button = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: blue;
  }
`;

export default function CampCard({ camp }: { camp: IcampInfo }) {
  return (
    <>
      <Card>
        <CampImg src={camp.campImg} />
        <CampName>{camp.campName}</CampName>
        <CampDesc> {camp.campProf} </CampDesc>
        <Button>
          {' '}
          수료증 발급 받기 <FiArrowRight size={20} />{' '}
        </Button>
      </Card>
    </>
  );
}
