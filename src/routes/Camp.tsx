import React, { memo } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
// import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PdfMaker from '../components/PdfMaker';
import Header from '../components/Header';
import Footer from '../components/Footer';
import theme from '../theme';
import { UserDept, UserId, UserName } from '../store/atom';
import { useRecoilValue } from 'recoil';

const campInfo: IcampInfo = {
  campId: 1, // request
  campName: '미리미리 C 캠프',
  campImg:
    'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
  campSeason: '2023 하계',
  campProf: '김광 교수',
  startDate: '23.07.01',
  endDate: '23.07.31',
  taked: false,
  student: [
    {
      studentId: 22000770,
      studentName: '김철수',
    },
    {
      studentId: 2,
      studentName: '이영희',
    },
    {
      studentId: 3,
      studentName: '홍길동',
    },
  ],
};

interface IcampInfo {
  campId: number;
  campName: string;
  campImg: string;
  campSeason: string;
  campProf: string;
  startDate: string;
  endDate: string;
  taked: boolean;
  student: Istudent[];
}

interface Istudent {
  studentId: number;
  studentName: string;
}
interface IuserInfo {
  userId: string;
  userName: string;
  userDept: string;
}

const StyledPage = styled.div`
  padding: 0px 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 1000px;
`;
const CampImg = styled.img`
  width: 600px;
  height: 400px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
  gap: 10px;
  position: relative;
`;

const CampSeason = styled.div`
  font-size: 16px;
  color: #666666;
`;
const CampName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0px;
`;
const CampDesc = styled.div`
  font-size: 18px;
`;
const PdfButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 20px;
  background-color: ${theme.palette.color.main};
  color: white;
  width: 330px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: ${theme.palette.color.darkblue};
  }
`;

const NoButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 20px;
  background-color: gray;
  color: white;
  width: 330px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
`;

const List = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  border: 1px solid #ddd;
  margin-top: 30px;
`;
const StudentList = styled.div`
  margin-top: 10px;
  border-collapse: collapse;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  width: 150px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  width: 150px;
  text-align: left;
`;

const MemoizedPDFDownloadLink = memo(
  ({ campInfo, userInfo }: { campInfo: IcampInfo; userInfo: IuserInfo }) => (
    <PDFDownloadLink
      document={<PdfMaker campInfo={campInfo} userInfo={userInfo} />}
      fileName="수료증.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          <PdfButton> PDF 생성 중... </PdfButton>
        ) : (
          <PdfButton> 수료증 받급받기 </PdfButton>
        )
      }
    </PDFDownloadLink>
  ),
);

export default function Camp() {
  const userId = useRecoilValue(UserId);
  const userName = useRecoilValue(UserName);
  const userDept = useRecoilValue(UserDept);

  const userInfo = {
    userId: userId,
    userName: userName,
    userDept: userDept,
  };
  console.log(userInfo);

  return (
    <>
      <Header />
      <StyledPage>
        <Grid>
          <CampImg src={campInfo.campImg} />
          <Content>
            <CampSeason>{campInfo.campSeason}</CampSeason>
            <CampName>{campInfo.campName}</CampName>
            <CampDesc>{campInfo.campProf} 교수님</CampDesc>
            {campInfo.taked ? (
              <MemoizedPDFDownloadLink
                campInfo={campInfo}
                userInfo={userInfo}
              />
            ) : (
              <NoButton> 미이수 </NoButton>
            )}
          </Content>
        </Grid>
        <List>
          <StudentList>
            <Title>
              {campInfo.campSeason} {campInfo.campName} 수료 학생 명단{' '}
            </Title>
            <thead>
              <tr>
                <TableHeader>학번</TableHeader>
                <TableHeader>이름</TableHeader>
              </tr>
            </thead>
            <tbody>
              {campInfo.student.map((student: Istudent) => (
                <tr key={student.studentId}>
                  <TableCell>{student.studentId}</TableCell>
                  <TableCell>{student.studentName}</TableCell>
                </tr>
              ))}
            </tbody>
          </StudentList>
        </List>
      </StyledPage>
      <Footer />
    </>
  );
}
