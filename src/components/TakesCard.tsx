import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  border: 1px solid #666666;
  padding: 15px;
  margin: 20px;

  &:hover {
    transform: scale(1.02);
  }
`;

const Season = styled.div`
  font-size: 14px;
  color: #666666;
`;
const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Prof = styled.div`
  font-size: 14px;
`;

export default function TakesCard({
  campName,
  campSeason,
  campProf,
}: {
  campName: string;
  campSeason: string;
  campProf: string;
}) {
  return (
    <Card>
      <Season>{campSeason}</Season>
      <Name> {campName}</Name>
      <Prof>{campProf} 교수님 </Prof>
    </Card>
  );
}
