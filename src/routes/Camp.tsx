import { PDFDownloadLink } from '@react-pdf/renderer';
// import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PdfMaker from '../components/PdfMaker';

const campInfo: IcampInfo = {
  campID: 1, // request
  campName: '미리미리 C 캠프',
  campImg:
    'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
  campSeason: '2023 하계',
  campProf: '김광 교수',
  student: [
    {
      studentID: 22000770,
      studentName: '김철수',
    },
    {
      studentID: 2,
      studentName: '이영희',
    },
    {
      studentID: 3,
      studentName: '홍길동',
    },
  ],
};

interface IcampInfo {
  campID: number;
  campName: string;
  campImg: string;
  campSeason: string;
  campProf: string;
  student: Istudent[];
}

interface Istudent {
  studentID: number;
  studentName: string;
}

// 기존 코드에서 Page 컴포넌트 이름 변경
const StyledPage = styled.div`
  padding: 0px 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  /* background-color: blue; */
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
  background-color: #824df5;
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
    background-color: #6a3cc7;
  }
`;

// const styles = StyleSheet.create({
//     Font.register({ family: 'KoreanFont', src: KoreanFont });
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
//   koreanText: {
//     fontFamily: 'KoreanFont', // 폰트 이름
//   },
// });

const Left = styled.div`
  width: 600px;
  /* background-color: red; */
  display: flex;
  padding: 30px;
  border: 1px solid #ddd;
  margin-top: 30px;
`;
const StudentList = styled.div`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  /* border: 1px solid #ddd; */
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

// function PdfCertificate({ campInfo }: { campInfo: IcampInfo }) {
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>수료증</Text>
//           <Text>이름: {campInfo.student[0].studentName}</Text>
//           <Text>과정: {campInfo.campName}</Text>
//           <Text>강사: {campInfo.campProf}</Text>
//           <Text>수료일: {campInfo.campSeason}</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// }

export default function Camp() {
  // const campId = useParams();

  //   const handleGenerateCertificate = () => {
  //     const doc = new jsPDF();

  //     doc.addFont('path/to/your/font.ttf', 'YourFontAlias', 'normal');
  //     doc.setFont('YourFontAlias');

  //     doc.setFontSize(20);
  //     doc.text('수료증', 105, 20, { align: 'center' });

  //     doc.setFontSize(14);
  //     doc.text(`이름: ${campInfo.student[0].studentName}`, 30, 50);
  //     doc.text(`과정: ${campInfo.campName}`, 30, 60);
  //     doc.text(`강사: ${campInfo.campProf}`, 30, 70);
  //     doc.text(`수료일: ${campInfo.campSeason}`, 30, 80);

  //     // PDF 다운로드
  //     doc.save('수료증.pdf');
  //   };

  return (
    <>
      <StyledPage>
        <Grid>
          <CampImg src={campInfo.campImg} />
          <Content>
            <CampSeason>{campInfo.campSeason}</CampSeason>
            <CampName>{campInfo.campName}</CampName>
            <CampDesc>{campInfo.campProf}</CampDesc>

            {/* <PdfButton onClick={handleGenerateCertificate}>
              수료증 받급받기
            </PdfButton> */}
            <PDFDownloadLink
              document={<PdfMaker campInfo={campInfo} />}
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
          </Content>
        </Grid>
        <Grid>
          <Left>
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
                  <tr key={student.studentID}>
                    <TableCell>{student.studentID}</TableCell>
                    <TableCell>{student.studentName}</TableCell>
                  </tr>
                ))}
              </tbody>
            </StudentList>
          </Left>
          <div />
        </Grid>
      </StyledPage>
    </>
  );
}
